import React from 'react';
import styled from 'styled-components';
import About from './About';
import { Link } from "react-router-dom";
import test from "../../assets/image/codingImg2.webp"


function Home() {
    return (
        <HomeStyle>
            <div className='left'>
                <div className='img-box'></div>
            </div>
            
            <div className='right'>
                <section>
                    <h2>I'M ghuHwan Jo</h2>
                    <h4>INFO</h4>
                    <ul>
                        <li><span>Name : </span>조규환</li>
                        <li><span>Age : </span>32, 1993.04</li>
                        <li><span>Phone : </span>010-3999-9027</li>
                        <li><span>Address : </span>청주시 흥덕구</li>
                        <li><span>Email : </span>zgh0608@naver.com</li>
                    </ul>
                    </section>
                <Link to="/about" className=''>MORE ABOUT ME</Link>
            </div>
        </HomeStyle>
    )
}

const HomeStyle = styled.main`
    display: flex; //Flex는 컨테이너에 display: flex;를 적용하는게 시작
    color: #fff;
    .left {
        flex: 0 0 35%;
        position: relative;
		max-width: 600px;

        .img-box {
            background-image: url(${(props) => props.theme.mainImg});
            background-size: cover;
			background-repeat: no-repeat;
			background-position: top;
            position: relative;
            height: 90vh;
            border-radius: 15px;
			box-shadow: 0 0 7px rgba(0, 0, 0, 0.9);
			position: relative;
			z-index: 1;
            margin: 5vh 0 0 30px;
        } 
    }
    .right {
        display: flex;
		flex-direction: column; //direction - 배치방향설정 (row, row-reverse)
		justify-content: center;
		align-items: flex-start;
		padding: 0 10% 0 7%;
        h2 {
            font-size: 40px;
            padding: 0px 0px 20px 0px;
            margin: 0px 0px 30px 0px;
        }
        h4 {
            font-size: 30px;
            margin: 15px 0px 15px 0px;
        }
        ul {

            li{
                font-size: 18px;
                padding: 10px 0px 10px 0px;
            }
        }
    }
`;

export default Home;