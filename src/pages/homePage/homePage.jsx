import React from 'react';
import "./homePage.scss"
import {Col, Container, Row} from "react-bootstrap";

import service1Image from '../../assets/consultation.jpeg'
import service2Image from '../../assets/vacant-home-staging.jpeg'
import service3Image from '../../assets/service3.jpg'
import ourmisson from '../../assets/our-mission.jpg'
import {NavLink} from "react-router-dom";

const HomePage = () => {
    return (
        <div className='homePage'>
            <section className='section1'>
                <div className='image-wrapper'>
                    {/*<h1 className="centered-text container">Staged homes sell 88% faster and for 20% more. Ceza A interior designs team will prepare your home to sell faster and for a higher price than the competition.</h1>*/}
                </div>
            </section>
            <Container>
                <section className='section2'>
                    <p className='title'>Our Services</p>
                    <Row>
                        <Col lg md={12}>
                            <div className='p-2 column'>
                                <div className='img-wrapper'>
                                    <img src={service1Image} alt="img"/>
                                </div>
                                <p className='service-title'>Staging Consultation</p>
                                <p className='service-description'>Our expert designers will tour your home, whether vacant or occupied and create either verbal or written report of the envisioned space that appeals to potential buyers.</p>
                                <NavLink to={'/services'} className="learn-more">
                                    Learn More
                                </NavLink>
                            </div>
                        </Col>
                        <Col lg md={12}>
                            <div className='p-2 column'>
                                <div className='img-wrapper'>
                                    <img src={service2Image} alt="img" style={{objectPosition: 'top'}}/>
                                </div>
                                <p className='service-title'>Vacant Home Staging</p>
                                <p className='service-description'>We pride ourselves on delivering a hassle-free service, turning
                                    properties into a home. Offering Curated Furniture Packages, bespoke Interior Design and Home Staging services.</p>
                                <NavLink to={'/services'} className="learn-more">
                                    Learn More
                                </NavLink>
                            </div>
                        </Col>
                        <Col lg md={12}>
                            <div className='p-2 column'>
                                <div className='img-wrapper'>
                                    <img src={service3Image} alt="img"/>
                                </div>
                                <p className='service-title'>Occupied Staging</p>
                                <p className='service-description'>If you are living in your home while it’s for sale, we help make it easy to get market ready by combining our inventory with your existing furniture.</p>
                                <NavLink to={'/services'} className="learn-more">
                                    Learn More
                                </NavLink>
                            </div>
                        </Col>
                    </Row>
                </section>
                <section className='section3'>
                    <Row>
                        <Col lg md={12}>
                            <div className='img-wrapper'>
                                <img src={ourmisson} alt="img"/>
                            </div>
                        </Col>
                        <Col lg md={12}>
                            <div>
                                <p className='title'>Our mission</p>
                                <p className='description'>Our mission is to transform spaces into beautiful and inviting homes that inspire and attract potential buyers. We are committed to supporting Home sellers and Real Estate Agents in achieving their goals by providing exceptional staging services that enhance the appeal and value of the properties they represent.</p>
                                <p className='description'>We understand that selling properties can be very stressful, so let our team at Ceza A Interior Designs make it a bit easier for you. We pride ourselves on attention to detail and delivering exceptional results, on time and on brief.</p>
                            </div>
                        </Col>
                    </Row>
                </section>
            </Container>

        </div>
    );
};

export default HomePage;