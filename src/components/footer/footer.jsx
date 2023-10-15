import React from 'react';
import './footer.scss'
import {Col, Container, Row} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import logo from "../../assets/logo.png";
import email from '../../assets/mail.png';
import phone from '../../assets/phone-call.png';
import fb from '../../assets/facebook.png';
import insta from '../../assets/instagram.png';
import linkedin from '../../assets/linkedin.png';
import location from '../../assets/location.png'

const Footer = () => {
    return (
        <div className='footer'>
            <Container>
                <Row>
                    <Col md sm={6} className='py-2 py-md-0'>
                        <div className='logo-wrapper'>
                            <img src={logo} alt="logo"/>
                        </div>
                    </Col>
                    <Col md sm={6} className='py-2 py-md-0'>
                        <div className='nav-links'>
                            <ul>
                                <li>
                                    <NavLink to={'/'}>
                                        Home
                                    </NavLink>
                                </li>
                                {/*<li>*/}
                                {/*    <NavLink to={'/moodboard'}>*/}
                                {/*        Moodboard*/}
                                {/*    </NavLink>*/}
                                {/*</li>*/}
                                <li>
                                    <NavLink to={'/projects'}>
                                        Projects
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to={'/services'}>
                                        Services
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to={'/contactUs'}>
                                        Contact Us
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    </Col>
                    <Col md sm={6} className='py-2 py-md-0'>
                        <div className='info'>
                            <ul>
                                <li>
                                    <div className='line'>
                                        <div className='title'>
                                            <div className='logo-wrapper'>
                                                <img src={location} alt="img"/>
                                            </div>
                                            <span>Location</span>
                                        </div>
                                        <a href={'https://goo.gl/maps/Mx5gmuMRxARAEh2W9'} className='desc'>Los Angeles, CA</a>
                                    </div>
                                </li>
                                <li>
                                    <div className='line'>
                                        <div className='title'>
                                            <div className='logo-wrapper'>
                                                <img src={email} alt="img"/>
                                            </div>
                                            <span>Email</span>
                                        </div>
                                        <a href={'mailto:info@cezaadesigns.com'} className='desc'>info@cezaadesigns.com</a>
                                    </div>
                                </li>
                                <li>
                                    <div className='line'>
                                        <div className='title'>
                                            <div className='logo-wrapper'>
                                                <img src={phone} alt="img"/>
                                            </div>
                                            <span>Phone</span>
                                        </div>
                                        <a href={'tel:+16268187702'} className='desc'>+1 (626) 818-7702</a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </Col>
                    <Col md sm={6} className='py-2 py-md-0'>
                        <div className='social-links'>
                            <p className='title'>Social Links</p>
                            <ul>
                                <li>
                                    <a href="https://www.facebook.com/people/cezaa_designs/100089448460530/?mibextid=LQQJ4d" className='logo'>
                                        <img src={fb} alt="img"/>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.instagram.com/cezaa_designs/?igshid=YmMyMTA2M2Y%3D" className='logo'>
                                        <img src={insta} alt="img"/>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.linkedin.com/in/ceza-awakimian-a04a0a12/" className='logo'>
                                        <img src={linkedin} alt="img"/>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;