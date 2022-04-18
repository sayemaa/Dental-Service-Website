import React, { useRef } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Login.css'

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || "/";
    let errorElement;

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);


    if (user) {
        navigate(from, { replace: true });
    }

    if (loading || sending) {
        return <Loading></Loading>
    }

    if (error) {
        errorElement = <p className='text-danger'>Error: {error?.message} </p>
    }

    const handleLogin = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        signInWithEmailAndPassword(email, password);
    }

    const navigateRegister = event => {
        navigate('/register');
    }

    const resetPassword = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Email sent!');
        }
        else {
            toast('Please enter your email address');
        }
    }

    return (
        <div className='login-form mx-auto'>
            <h2 style={{ color: '#27abba' }} className='text-center my-4'>Please Login</h2>
            <form onSubmit={handleLogin}>
                <input ref={emailRef} type="email" name="email" placeholder='Your Email Address' required />
                <input ref={passwordRef} type="password" name="password" placeholder='Password' required />
                <input className='login-btn' type="submit" value="Login" />
            </form>
            {errorElement}
            <p className='mx-auto text-center'>New to inDent? <Link to="/register" className='register-link pe-auto' onClick={navigateRegister}>Create an account</Link></p>
            <p className='mx-auto text-center'>Forgot Password? <button className='register-link pe-auto' onClick={resetPassword}>Reset Password</button></p>
            <SocialLogin></SocialLogin>
            <ToastContainer />
        </div>
    );
};

export default Login;