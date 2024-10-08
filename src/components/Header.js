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
                <li><Link to="/"><IoHomeOutline size='30' color="#fff"/></Link></li>
                <li><Link to="/about"><VscAccount size='30' color="#fff"/></Link></li>
                <li><Link to="/projects"><TfiLayersAlt size='30' color="#fff"/></Link></li>
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
                display: inline-block;
                opacity: 0;
            }
        }
    }
`;

//style={{color: themeColor}}
export default Header