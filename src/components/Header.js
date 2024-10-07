import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";

//import "../style/Header.scss";

function Header() {
    const user = useSelector((state) => state.user.value);
    const themeColor = useSelector((state) => state.theme.value);
    
    return (
        <StyleHeader> 
            <ul>
                <li><Link to="/">HOME</Link></li>
                <li><Link to="/about">ABOUT</Link></li>
                <li><Link to="/projects">PROJECT</Link></li>
                <li><Link to="/gitHub">GIT</Link></li>
            </ul>
        </StyleHeader>
    )
}
const StyleHeader = styled.header`
    background-color: #111;
    //padding: 20px;
    //text-align: center;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    z-index: 100;
    //display: flex;
    //flex-direction: column;

    ul {
        display: flex;
        -webkit-box-pack: center;
        justify-content: center;
        //align-items: flex-end;
        flex-direction: column;
        height: 100%;
        padding-left:10px;
        li {
            margin: 0px 0px 40px;
            list-style-type: none;
        }
    }

    
`;
//style={{color: themeColor}}
export default Header