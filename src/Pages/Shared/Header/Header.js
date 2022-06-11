import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import logo from '../../../images/logo/inDent.png'
import CustomLink from './CustomLink/CustomLink';
import './Header.css'

const Header = () => {
    const [user] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth);
    }

    return (
        <div>
            <Navbar className='sticky-top' collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Brand style={{ color: '#27abba' }} className='d-flex align-items-center fw-bold fs-3' href="#home"><img height={40} className='me-1' src={logo} alt="" />inDent</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <CustomLink className='me-2 nav-links' as={Link} to="/">Home</CustomLink>
                            <CustomLink className='me-2 nav-links' as={Link} to="blogs">Blogs</CustomLink>
                            <CustomLink className='me-2 nav-links' as={Link} to="about">About</CustomLink>
                            {
                                user ?
                                    <a className='sign-out-btn me-2' onClick={handleSignOut}>Sign Out</a>
                                    :
                                    <CustomLink className='me-2 nav-links' as={Link} to="login">Login</CustomLink>}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;