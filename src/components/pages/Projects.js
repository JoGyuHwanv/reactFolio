import React from 'react';
import data from '../../assets/data/projectdata';
import Heading from '../Heading';

function Projects() {
    const projectData = data.projectList.map((list, idx) => (
        <div className='project-list' key={idx}>
            <h5 className='project-label'>
                <i>{list.name}</i>
            </h5>
            <ul>
                <li>{list.period}</li>
            </ul>
            <ul>
                <li>{list.stack}</li>
            </ul>
        </div>
    ));

    return (
        <>
            <Heading level='2'></Heading>
            <section>
                <div className='project'>
                    {projectData}
                </div>
            </section>
        </>
    )
}
export default Projects;