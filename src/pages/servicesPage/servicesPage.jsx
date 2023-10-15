import React from 'react';
import './servicesPage.scss'
import {Col, Container, Row} from "react-bootstrap";

import service1 from '../../assets/Residentialstaging.jpg';
import service3 from '../../assets/Airbnb.jpg';
import service6 from '../../assets/occupied.jpeg';

const ServicesPage = () => {
    const data = [
        {
            id: 1,
            imgUrl: service1,
            title: "RESIDENTIAL STAGING",
            description: 'Ceza A offers luxury home staging. Drawing from a curated collection of designer furnishings, art, and accessories, Ceza A design team will prepare your home to sell faster and for a higher price than the competition.'
        },
        {
            id: 2,
            imgUrl: service3,
            title: "AIRBNB",
            description: "Setting up a successful Airbnb is hard work and time-consuming. Let Ceza A save you time and money to get a designer look so that your property stands out from your competition, increase your booking and get the 5 star reviews that you deserve.\n"
        },
        {
            id: 3,
            imgUrl: service6,
            title: "OCCUPIED RE-DESIGN",
            description: "If you are planning to live in your home while it’s on the market. Our Team of designers will use the existing furniture and  complement them with pieces in our inventory, giving your space a fresh look."
        },
    ]
    return (
        <div className='service-page'>
            <Container>
                <p className='title'>Services</p>
                <Row>
                    {
                        data.sort().map(item => {
                            return (
                                <Col key={item.id} xs={12} sm={6} md={4}>
                                    <div className="service">
                                        <div className='img-wrapper'>
                                            <img src={item.imgUrl} alt="img"/>
                                        </div>
                                        <p className='title'>{item.title}</p>
                                        <p className='description'>{item.description}</p>
                                    </div>
                                </Col>
                            )
                        })
                    }
                </Row>
            </Container>
        </div>
    );
};

export default ServicesPage;