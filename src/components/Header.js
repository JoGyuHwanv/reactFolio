import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { IoHomeOutline } from "react-icons/io5";
import { VscAccount } from "react-icons/vsc";
import { TfiLayersAlt } from "react-icons/tfi";
import { FaGithub } from "react-icons/fa";
//import "../style/Header.scss";

function Header() {
    const user = useSelector((state) => state.user.value);
    const themeColor = useSelector((state) => state.theme.value);
    
    return (
        <StyleHeader> 
            <ul>
                <li><Link to="/"><span>HOME</span><IoHomeOutline size='30' color="#fff"/></Link></li>
                <li><Link to="/about"><span>ABOUT</span><VscAccount size='30' color="#fff"/></Link></li>
                <li><Link to="/projects"><span>PROJECT</span><TfiLayersAlt size='30' color="#fff"/></Link></li>
                <li><Link to="https://github.com/JoGyuHwanv" target="_blank"><span>GIT</span><FaGithub size='30' color="#fff"/></Link></li>
            </ul>
        </StyleHeader>
    )
}
const StyleHeader = styled.header`
    
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    z-index: 100;
    ul {
        display: flex;
        -webkit-box-pack: center;
        justify-content: center;
        //align-items: flex-end;
        flex-direction: column;
        height: 100%;
        padding-left:10px;
        li {
            position: relative;
            margin: 0px 0px 40px;
            
            span {
                position: absolute;
                // right: 0px;
                display: inline-block;
                opacity: 0;
                // font-size: 16px;
                // font-weight: 600;
                // letter-spacing: 0.5px;
                // line-height: 1.2;
                // text-transform: uppercase;
                // vertical-align: text-top;
                // transition: opacity 0.3s ease, padding 0.3s ease;
                // color: transparent;
            }
            i {
                width: 25px;
                height: 25px;
                font-size: 20px;
                text-align: center;
                line-height: 25px;
            }
        }
    }
`;

//style={{color: themeColor}}
export default Header