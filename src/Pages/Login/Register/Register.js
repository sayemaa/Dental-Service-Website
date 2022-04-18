import React, { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import './Register.css'

const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const nameRef = useRef('');
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();


    if (user) {
        navigate("/home");
    }

    const handleRegister = event => {
        event.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        createUserWithEmailAndPassword(email, password);
    }

    const navigateLogin = () => {
        navigate('/login');
    }

    return (
        <div className='register-form'>
            <h2 style={{ color: '#27abba' }} className='text-center my-4'>Register Now</h2>
            <form onSubmit={handleRegister}>
                <input ref={nameRef} type="text" name="name" placeholder='Your Name' />
                <input ref={emailRef} type="email" name="email" placeholder='Your Email Address' required />
                <input ref={passwordRef} type="password" name="password" placeholder='Password' required />
                <input className='register-btn' type="submit" value="Register" />
            </form>
            <p className='mx-auto text-center'>Already have an account? <Link to="/login" className='login-link pe-auto' onClick={navigateLogin}>Please Login</Link></p>
        </div>
    );
};

export default Register;