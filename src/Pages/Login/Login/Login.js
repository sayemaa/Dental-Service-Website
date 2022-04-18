import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import './Login.css'

const Login = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);


    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || "/";

    if (user) {
        navigate(from, { replace: true });
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

    return (
        <div className='login-form'>
            <h2 style={{ color: '#27abba' }} className='text-center my-4'>Please Login</h2>
            <form onSubmit={handleLogin}>
                <input ref={emailRef} type="email" name="email" placeholder='Your Email Address' required />
                <input ref={passwordRef} type="password" name="password" placeholder='Password' required />
                <input className='login-btn' type="submit" value="Login" />
            </form>
            <p className='mx-auto text-center'>New to inDent? <Link to="/register" className='register-link pe-auto' onClick={navigateRegister}>Register Now</Link></p>
        </div>
    );
};

export default Login;