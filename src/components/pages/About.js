import React from 'react';
import styled from 'styled-components';
//import '../style/About.scss';


const About = () => {
    return (
        <StyleAbout>
            <div className='title'>
                <h1>ABOUT<span>Me</span></h1>
            </div>
            <section>
                <div className='skill-main'>
                    <div className='skill-list'>
                        <h3>HTML/CSS</h3>
                        <ul>
                            <li>test</li>
                            <li>test</li>
                            <li>test</li>
                        </ul>
                    </div>
                    <div className='skill-list'>
                        <h3>HTML/CSS</h3>
                        <ul>
                            <li>test</li>
                            <li>test</li>
                            <li>test</li>
                        </ul>
                    </div>
                    <div className='skill-list'>
                        <h3>HTML/CSS</h3>
                        <ul>
                            <li>test</li>
                            <li>test</li>
                            <li>test</li>
                        </ul>
                    </div>
                    <div className='skill-list'>
                        <h3>HTML/CSS</h3>
                        <ul>
                            <li>test</li>
                            <li>test</li>
                            <li>test</li>
                        </ul>
                    </div>
                    <div className='skill-list'>
                        <h3>HTML/CSS</h3>
                        <ul>
                            <li>test</li>
                            <li>test</li>
                            <li>test</li>
                        </ul>
                    </div>
                    <div className='skill-list'>
                        <h3>HTML/CSS</h3>
                        <ul>
                            <li>test</li>
                            <li>test</li>
                            <li>test</li>
                        </ul>
                    </div>
                </div>
            </section>
        </StyleAbout>
        // <section id="about">
        //     <h2>소개</h2>
        //     <p> 내용 </p>
        // </section>
    )
}

const StyleAbout = styled.main`
section {
    max-width: 1140px;
    margin: auto;
    padding-bottom: 80px;
    
    .skill-main {
        display: flex;
        flex-wrap: wrap;
    
        .skill-list {
            width: calc(33% - 30px);
            margin: 0px 15px 30px;
            padding: 20px 30px;
            border: 2px solid rgb(37, 37, 37);
            border-radius: 10px;
            cursor: default;
            position: relative;
        }
    }

} 

// .skill-main {
//     display: flex;
//     flex-wrap: wrap;
// }

// .skill-list { 
//     width: calc(33% - 30px);
//     margin: 0px 15px 30px;
//     padding: 20px 30px;
//     border: 2px solid rgb(37, 37, 37);
//     border-radius: 10px;
//     cursor: default;
//     position: relative;
// }

// .main section {
//     max-width: 1140px;
//     margin: auto;
// }
`;
export default About;