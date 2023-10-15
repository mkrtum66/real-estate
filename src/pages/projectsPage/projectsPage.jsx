import React from 'react';
import './projectsPage.scss'

import {Container} from "react-bootstrap";
import CompareProjects from "../../components/CompareImage";

const ProjectsPage = () => {
    return (
        <div className='projects-page'>
            <Container>
                <p className='title'>Before & After</p>
                <CompareProjects/>
                <div className="mb-5"></div>
            </Container>
        </div>
    );
};

export default ProjectsPage;