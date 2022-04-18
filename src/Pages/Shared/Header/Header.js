import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import logo from '../../../images/logo/inDent.png'
import './Header.css'

const Header = () => {
    const [user] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth);
    }

    return (
        <div>
            <Navbar collapseOnSelect expand="lg" sticky='top' bg="light" variant="light">
                <Container>
                    <Navbar.Brand style={{ color: '#27abba' }} className='d-flex align-items-center fw-bold fs-3' href="#home"><img height={40} className='me-1' src={logo} alt="" />inDent</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link className='text-dark me-2' href="home#services">Services</Nav.Link>
                            <Nav.Link className='text-dark me-2' href="home#office">Office</Nav.Link>
                            <Nav.Link className='text-dark me-2' as={Link} to="blogs">Blogs</Nav.Link>
                            <Nav.Link className='text-dark me-2' as={Link} to="about">About</Nav.Link>
                            {
                                user ?
                                    <button className='sign-out-btn me-2' onClick={handleSignOut}>Sign Out</button>
                                    :
                                    <Nav.Link className='text-dark me-2' as={Link} to="login">Login</Nav.Link>}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;