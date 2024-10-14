import React from 'react';
import styled from 'styled-components';
import About from './About';
import { Link } from "react-router-dom";
import test from "../../assets/image/codingImg2.webp"
import Wrapper from '../Wrapper';

function Home() {
    return (
        <Wrapper>
            <HomeStyle>
                <div className='left'>
                    <div className='img-box'></div>
                </div>
                
                <div className='right'>
                    <section>
                        <h2>I'M
                            <span className='message'>
                                <strong>GHUHWAN JO</strong>
                            </span>
                        </h2>
                        <p>안녕하세요 제 이름은 조규환입니다. <br />
                            동료들과의 협업 및 피드백을 좋아하고 늘 맡은 일에 자부심을 가지고 최선을 다하고 있습니다.</p><br />
                        <h4>INFO</h4>
                        <ul>
                            <li><span>Name : </span>조규환</li>
                            <li><span>Age : </span>32, 1993.04</li>
                            <li><span>Phone : </span>010-3999-9027</li>
                            <li><span>Address : </span>청주시 흥덕구</li>
                            <li><span>Email : </span>zgh0608@naver.com</li>
                        </ul>
                        <Link to="/about" className=''>MORE ABOUT ME</Link>
                    </section>
                </div>
            </HomeStyle>
        </Wrapper>
    )
}

const HomeStyle = styled.main`
    display: flex; //Flex는 컨테이너에 display: flex;를 적용하는게 시작
    color: #fff;
    .left {
        flex: 0 0 40%;
        position: relative;
		max-width: 600px;

        .img-box {
            background-image: url(${(props) => props.theme.mainImg});
            background-size: cover;
			background-repeat: no-repeat;
			background-position: top;
            position: relative;
            border-radius: 15px;
			box-shadow: 0 0 7px rgba(0, 0, 0, 0.9);
			position: relative;
			z-index: 1;
            height: 90vh;
            margin: 5vh 0px 0px 80px;
        } 
    }
    .right {
        display: flex;
        flex-direction: column; //direction - 배치방향설정 (row, row-reverse)
        justify-content: center;
        align-items: flex-start;
        padding: 0px 10% 0px 7%;
        
        section {
            
            h2 {
                font-size: 40px;
                padding: 0px 0px 20px 0px;
                margin: 0px 0px 30px 0px;
            }
            .message {
                font-size: 40px;
                display: block;
                overflow: hidden;
                top: 0px;
                left: 80px;
            }
        
            h4 {
            font-size: 30px;
            margin: 15px 0px 15px 0px;
            }
            ul {
                display: flex;
                flex-wrap: wrap;
                li{
                    width: 50%;
                    padding-bottom: 10px;
                    font-size: 20px;
                    font-weight: 500;
                    //color: rgb(255, 180, 0);
                }
            }
        }
    }
    @media ${props => props.theme.laptop} {
        .right {
            section {
                ul {
                    li{
                        width: 100%;
                    }
                }
            }
        }
    }
    @media ${props => props.theme.tablet} {
        display: block;
        .left {
            max-width: 768px;
            .img-box {
                height: 50vh;
                margin: 5vh 80px 0 80px
            }
        }
        .right {
            flex-direction: row; //direction - 배치방향설정 (row, row-reverse)
            justify-content: center;
            align-items: flex-start;
            padding: 0 12% 0 15%;
            
            section {
                
            }
        }
    }
    @media ${props => props.theme.mobile} {
        display: block;
        .left {
            .img-box {
                height: 50vh;
                margin: 3vh 30px 0 30px
            }
        }
        .right {
            flex-direction: row; //direction - 배치방향설정 (row, row-reverse)
            justify-content: center;
            align-items: flex-start;
            padding: 0 12% 0 15%;
            
            section {
                
            }
        }
    }
`;

export default Home;