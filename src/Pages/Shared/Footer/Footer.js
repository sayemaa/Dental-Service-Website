import React from 'react';
import './Footer.css'

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer className='footer text-center mt-5 fixed-bottom'>
            <p className='d-flex justify-content-around'>inDent <small>copyright &copy; {year} </small></p>
        </footer>
    );
};

export default Footer;