import React from 'react';
import data from '../../assets/data/projectdata';
import Heading from '../PageHeader';
import styled from 'styled-components';
import Wrapper from '../Wrapper';


function Projects() {
    const projectData = data.projectList.map((list, idx) => (
        <div className='project-list' key={idx}>
            <div className='info-wrap'>
                <div className='txt-wrap'>
                    <div className='project-name'>{list.name}</div>
                    <span className='project-period'>{list.period}</span>
                    <p><span className='label'>Content</span>
                        {list.description}
                    </p>
                </div>
                <div className="tech">
                    <span className="label">Tech Stack</span>
                    <ul>
                        {list.stack.map((list, idx) => (
                            <li key={idx}>{list}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    ));

    return (
        <Wrapper>
            <ProjectStyle>
                <Heading level='2'></Heading>
                <div className='project'>
                    {/* {projectData} */}
                    <StyledSkillsWrap>{projectData}</StyledSkillsWrap>
                </div>
            </ProjectStyle>
        </Wrapper>
    )
}
export default Projects;

const ProjectStyle = styled.div`
    width: 85%;
    max-width: 1140px;
    margin: auto;
    padding-bottom: 80px;
    
    @media ${props => props.theme.mobile} {
        width: 80%;
        padding-bottom: 60px;
    }
`;

const StyledSkillsWrap = styled.div`
    display: flex;
    flex-wrap: wrap;

    .project-list {
        width: calc(28% - 14px);
        margin: 0px 15px 30px;
        padding: 10px 20px;
        border: 2px solid rgb(37, 37, 37);
        border-radius: 10px;
        cursor: default;
        background-color: #191919;

        &:hover {
            border-color: ${(props) => props.theme.mainColor};
            transition: 1s
        }

        .info-wrap {
            position: relative;
            z-index: 1;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            .txt-wrap {
                .project-name {
                    font-weight: 500;
                    font-size: 18px;
                    line-height: 1.3;
                    color: ${(props) => props.theme.mainColor};
                }
                .project-period {
                    font-size: 14px;
                }
                p {
                    padding: 10px 0;
                    font-size: 15px;
                }
            }
            
            .tech {
                ul {
                    display: flex;
                    flex-wrap: wrap;
                    margin-left: -2px;
                    padding-top: 3px;
                    li {
                        padding: 4px;
                        margin: 0 2px 5px;
                        border: 1px solid #fff;
                        border-radius: 2px;
                        font-size: 13px;
                        line-height: 1;
                    }
                }
            }
            
            span.label {
                display: block;
                padding-bottom: 3px;
                font-size: 13px;
                font-weight: 500;
            }
        }
    }
    @media ${props => props.theme.laptop} {
        .project-list {
            width: calc(44% - 22px);
        }
    }
    @media ${props => props.theme.tablet} {
        .project-list {
            width: calc(100% - 21px);
        }
    }
    @media ${props => props.theme.mobile} {
        .project-list {
            width: 90%;
            padding-bottom: 40px;
            &:not(:last-child) {
                &::after {
                    width: 70%;
                }
            }
        }
    }
`;