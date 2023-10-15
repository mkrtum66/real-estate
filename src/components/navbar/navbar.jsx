import React, {useState} from 'react';
import './navbar.scss';

import {Container, Nav, Navbar} from 'react-bootstrap';
import {Link, NavLink, useNavigate} from 'react-router-dom';

import logo from '../../assets/logo.png'

const Header = () => {
    const navigate = useNavigate();
    const [expanded, setExpanded] = useState(false);

    return (
        <Navbar bg="light" expand="lg"  expanded={expanded}>
            <Container>
                <Navbar.Brand onClick={() => navigate('/')}>
                    <img src={logo} alt="logo"/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(!expanded)}/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto navlinks">
                        <NavLink as={Link} to={'/'} className="px-2 py-2 py-lg-0" onClick={() => setExpanded(false)}>
                            Home
                        </NavLink>
                        {/*<NavLink to={'/moodboard'} className="px-2 py-2 py-lg-0" onClick={() => setExpanded(false)}>*/}
                        {/*    Moodboard*/}
                        {/*</NavLink>*/}
                        <NavLink to={'/projects'} className="px-2 py-2 py-lg-0" onClick={() => setExpanded(false)}>
                            Projects
                        </NavLink>
                        <NavLink to={'/services'} className="px-2 py-2 py-lg-0" onClick={() => setExpanded(false)}>
                            Services
                        </NavLink>
                        <NavLink to={'/contactUs'} className="px-2 py-2 py-lg-0" onClick={() => setExpanded(false)}>
                            Contact Us
                        </NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;