import React, { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import './Register.css'
import SocialLogin from '../SocialLogin/SocialLogin';
import Loading from '../../Shared/Loading/Loading';

const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    const [error, setError] = useState('');
    const nameRef = useRef('');
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const confirmPasswordRef = useRef('');
    const navigate = useNavigate();

    if (user) {
        navigate("/home");
    }

    if (loading) {
        return <Loading></Loading>
    }

    const handleRegister = event => {
        event.preventDefault();

        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        const confirmPassword = confirmPasswordRef.current.value;

        if (password !== confirmPassword) {
            setError('Passwords did not match');
            return;
        }
        if (password.length < 6) {
            setError('Password must be 6 characters or longer');
            return;
        }

        createUserWithEmailAndPassword(email, password);
    }

    const navigateLogin = () => {
        navigate('/login');
    }

    return (
        <div className='register-form mx-auto'>
            <h2 style={{ color: '#27abba' }} className='text-center my-4'>Register Now</h2>
            <form onSubmit={handleRegister} className='d-grid justify-items-center w-25 mx-auto'>
                <input ref={nameRef} type="text" class="form-control" name="name" placeholder='Your Name' />
                <input ref={emailRef} type="email" class="form-control" name="email" placeholder='Your Email Address' required />
                <input ref={passwordRef} type="password" class="form-control" name="password" placeholder='Password' required />
                <input ref={confirmPasswordRef} type="password" class="form-control" name="confirm-password" placeholder='Confirm Password' required />
                <p style={{ color: 'red' }}>{error}</p>
                <input className='register-btn border-0 mx-auto' type="submit" value="Register" />
            </form>
            <p className='mx-auto text-center'>Already have an account? <Link to="/login" className='login-link pe-auto' onClick={navigateLogin}>Please Login</Link></p>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;