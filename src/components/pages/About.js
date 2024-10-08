import React from 'react';
import styled from 'styled-components';
import data from '../../assets/data/skill';



function About() {
    const skillList = data.skillList.map((list, idx) => (
        <div className='skill-list' key={idx}>
            <h5 className="skill-label">
                {/* <i className={list.icon}></i>: {list.label} */}
                <i>{list.label}</i>
            </h5>
            <ul className='skill-detail'>
                <li key={idx}>{list.detail}</li>
                {/* {list.detail.map((detail, idx) => (
                    <li key={idx}>{detail}</li>
                ))} */}
            </ul>
        </div>
    ));
    
    return (
        <StyleAbout>
            <div className='title'>
                <h1>ABOUT<span>Me</span></h1>
            </div>
            <section>
                <div className='skill-main'>
                    {skillList}
                </div>
            </section>
        </StyleAbout>
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
            width: calc(27% - 22px);
            margin: 0px 15px 30px;
            padding: 20px 30px;
            border: 2px solid rgb(37, 37, 37);
            border-radius: 10px;
            cursor: default;
            position: relative;

            .skill-label {
                margin-bottom: 10px;
                i {
                    // color: ${(props) => props.theme.mainColor};
                    padding-right: 10px;
                    font-size: 20px;
                    vertical-align: text-top;
                }
            }
            .skill-detail {
                li {
                    position: relative;
                    padding: 0 0 10px 30px;
                    font-size: 14px;
                    line-height: 1.5;
                    color: rgb(255 255 255 / 80%);
                    &::before {
                        content: "";
                        position: absolute;
                        left: 0;
                        top: 13px;
                        width: 20px;
                        height: 1px;
                        background: ${(props) => props.theme.mainColor};
                    }
                }
            }
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