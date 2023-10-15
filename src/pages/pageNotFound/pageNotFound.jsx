import React from 'react';
import "./pageNotFound.scss"

import gif from '../../assets/page-not-found.gif'
import {Container} from "react-bootstrap";

const PageNotFound = () => {
    return (
        <Container className='pnf'>
            <p className='text'>Page not found</p>
            <p className='text m-0'>404</p>
            <div className='page-not-found'>
                <img src={gif} alt="404"/>
            </div>
        </Container>

    );
};

export default PageNotFound;