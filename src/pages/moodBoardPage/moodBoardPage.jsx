import React from 'react';
import './moodBoardPage.scss'
import {Col, Container, Row} from "react-bootstrap";
import image from "../../assets/servicePage3.jpeg";

const MoodBoardPage = () => {
    return (
        <div className='moodboard-page'>
            <Container>
                <p className='title'>Mood Board</p>
                <Row>
                    <Col lg={3} sm={6} className={'py-3'}>
                        <img src={image} alt="img" className={"img-fluid"}/>
                    </Col>
                    <Col lg={3} sm={6} className={'py-3'}>
                        <img src={image} alt="img" className={"img-fluid"}/>
                    </Col>
                    <Col lg={3} sm={6} className={'py-3'}>
                        <img src={image} alt="img" className={"img-fluid"}/>
                    </Col>
                    <Col lg={3} sm={6} className={'py-3'}>
                        <img src={image} alt="img" className={"img-fluid"}/>
                    </Col>
                    <Col lg={3} sm={6} className={'py-3'}>
                        <img src={image} alt="img" className={"img-fluid"}/>
                    </Col>
                    <Col lg={3} sm={6} className={'py-3'}>
                        <img src={image} alt="img" className={"img-fluid"}/>
                    </Col>
                    <Col lg={3} sm={6} className={'py-3'}>
                        <img src={image} alt="img" className={"img-fluid"}/>
                    </Col>
                    <Col lg={3} sm={6} className={'py-3'}>
                        <img src={image} alt="img" className={"img-fluid"}/>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default MoodBoardPage;