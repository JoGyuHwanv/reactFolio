import React from 'react';

const Projects = () => {
    const projects = [
        { name: '프로젝트 1', description: '설명 1'},
        { name: '프로젝트 2', description: '설명 2'}
    ];

    return (
        <section id='projects'>
            <h2>프로젝트</h2>
            <ul>
                {projects.map((projects, index) => (
                    <li key={index}>
                        <h3>{projects.name}</h3>
                        <p>{projects.description}</p>
                    </li>
                ))}
            </ul>
        </section>
    )
}
export default Projects;