import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../../../images/logo/logo.png'
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../Hooks/useAuth';

const Header = () => {
    const {user, logOut} = useAuth();
    return (
        <>    
        <Navbar bg="dark" variant="dark" sticky="top">
            <Container>
            <img
                    src={logo}
                    width="70"
                    height="60"
                    className="d-inline-block align-top"
                    alt="React Bootstrap logo"
                />
            <Navbar.Brand href="#home" className="text-danger fw-bolder">Red Chilli</Navbar.Brand>
            <Nav className="me-auto">
            <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
            <Nav.Link as={HashLink} to="/home#breakfast">Breakfast</Nav.Link>
            <Nav.Link as={HashLink} to="/home#lunch">Lunch</Nav.Link>
            <Nav.Link as={HashLink} to="/home#dinner">Dinner</Nav.Link>
            {user.email ? <button onClick={logOut} className="btn btn-danger">Logout</button> :
             <Nav.Link as={Link} to="/login">Login</Nav.Link>}
            </Nav>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
                Signed in as: <a href="#login">{user.displayName}</a>
            </Navbar.Text>
            </Navbar.Collapse>
            </Container>
        </Navbar>
    </>
    );
};
export default Header;