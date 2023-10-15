import React from 'react';
import './contactUsPage.scss'

import {Col, Container, Row} from "react-bootstrap";

import location from '../../assets/location.png'
import email from "../../assets/mail.png";
import phone from "../../assets/phone-call.png";
import fb from "../../assets/facebook.png";
import insta from "../../assets/instagram.png";
import linkedin from "../../assets/linkedin.png";

const ContactUsPage = () => {

    return (
        <div className='contact-us'>
            <Container>
                <h2 className='title'>Contact Us</h2>
                <Row>
                    <Col md={7} sm={12}>
                        <iframe
                            title='map'
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d423284.0440988565!2d-118.74137295555943!3d34.02060846941884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c75ddc27da13%3A0xe22fdf6f254608f4!2sLos%20Angeles%2C%20CA!5e0!3m2!1sen!2sus!4v1680915930281!5m2!1sen!2sus"
                            allowFullScreen="" loading="lazy"
                            style={{border: 0, width: '100%', height: '450px'}}
                            referrerPolicy="no-referrer-when-downgrade"/>
                    </Col>
                    <Col md={5} sm={12}>
                        <table>
                            <tbody>
                            <tr>
                                <td>
                                    <div className='table-title'>
                                        <div className='logo'>
                                            <img src={location} alt="img"/>
                                        </div>
                                        <p className='text'>Location:</p>
                                    </div>
                                </td>
                                <td>
                                    <a href={'https://goo.gl/maps/Mx5gmuMRxARAEh2W9'} className='table-desc'>Los Angeles, CA</a>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className='table-title'>
                                        <div className='logo'>
                                            <img src={email} alt="img"/>
                                        </div>
                                        <p className='text'>Email:</p>
                                    </div>
                                </td>
                                <td>
                                    <a href={'mailto:info@cezaadesigns.com'} className='table-desc'>info@cezaadesigns.com</a>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className='table-title'>
                                        <div className='logo'>
                                            <img src={phone} alt="img"/>
                                        </div>
                                        <p className='text'>Phone:</p>
                                    </div>
                                </td>
                                <td>
                                    <a href={'tel:+16268187702'} className='table-desc'>+1 (626) 818-7702</a>
                                </td>
                            </tr>
                            </tbody>
                        </table>
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
}

export default ContactUsPage