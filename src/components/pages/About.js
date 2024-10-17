import React from 'react';
import styled from 'styled-components';
import data from '../../assets/data/skill';
import Heading from '../PageHeader';
import Wrapper from '../Wrapper';
import { FaJava } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io";
import { TbFileTypeSql } from "react-icons/tb";
import { FaGithubSquare } from "react-icons/fa";
import { FaReact } from "react-icons/fa";

function About() {
    const icons = [<FaJava />, <IoLogoJavascript/>, <TbFileTypeSql/>, <FaGithubSquare/>, <FaReact/>];
    
    const skillList = data.skillList.map((list, idx) => (
        <div className='skill-list' key={idx}>
            <h5 className="skill-label">
                {/* <i className={list.icon}></i>: {list.label} */}
                <i>{icons[idx]}</i>
                - {list.label}
            </h5>
            <ul className='skill-detail'>
                {list.detail.map((detail, idx) => (
                    <li key={idx}>{detail}</li>
                ))}
                {/* <li key={idx}>{list.detail}</li> */}
                {/* {list.detail.map((detail, idx) => (
                    <li key={idx}>{detail}</li>
                ))} */}
            </ul>
        </div>
    ));
    return (
        <Wrapper>
            <StyleSkill>
                <Heading level='1'></Heading>
                <section>
                    <StyledSkillsWrap>{skillList}</StyledSkillsWrap>
                </section>
            </StyleSkill>
        </Wrapper>
    )
}

const StyleSkill = styled.main`
    section {
        max-width: 1140px;
        margin: auto;
        padding-bottom: 80px;
          
    }
   @media ${props => props.theme.mobile} {
    section {
        width: 90%;
        padding-bottom: 40px;
        &:not(:last-child) {
            &::after {
                width: 70%;
            }
        }
    }     
`;

const StyledSkillsWrap = styled.div`
    display: flex;
    flex-wrap: wrap;

    .skill-list {
        width: calc(28% - 14px);
        margin: 0px 15px 30px;
        padding: 10px 20px;
        border: 2px solid rgb(37, 37, 37);
        border-radius: 10px;
        cursor: default;
        
        &:hover {
            border-color: ${(props) => props.theme.mainColor};
            transition: 1s
        }

        .skill-label {
            margin-bottom: 10px;
            margin-top: 5px;
            font-size: 20px;
            i {
                color: ${(props) => props.theme.mainColor};
                padding-right: 10px;
                font-size: 30px;
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
                    //background: ${(props) => props.theme.mainColor};
                }
            }
        }
    }
    @media ${props => props.theme.laptop} {
        width: 85%;
		margin: auto;
		.skill-list {
			width: calc(44% - 22px);
		}
    }
    @media ${props => props.theme.tablet} {
        width: 85%;
            .skill-list {
                width: calc(100% - 21px);
            }
        }
    }
    @media ${props => props.theme.mobile} {
        width: 90%;
            .skill-list {
                width: calc(100% - 30px);
                position: relative;
            }
        }
    }
    
    .skill-list {
        position: relative;
        &:hover {
            &::before,
			&::after {
				width: 100%;
				height: 100%;
			}
            &::before {
				border-top-color: ${(props) => props.theme.mainColor};
				border-right-color: ${(props) => props.theme.mainColor};
				transition: width 0.15s ease-out, height 0.15s ease-out 0.15s;
			}
			&::after {
				border-bottom-color: ${(props) => props.theme.mainColor};
				border-left-color: ${(props) => props.theme.mainColor};
				transition: border-color 0s ease-out 0.3s, width 0.15s ease-out 0.3s, height 0.15s ease-out 0.45s;
			}
        }
    }
`;
export default About;