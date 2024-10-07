import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "../style/Header.scss";

function Header() {
    const user = useSelector((state) => state.user.value);
    const themeColor = useSelector((state) => state.theme.value);
    
    return (
        <header> 
            <ul>
                <li><Link to="/home">HOME</Link></li>
                <li><Link to="/about">ABOUT</Link></li>
                <li><Link to="/projects">PROJECT</Link></li>
                <li><Link to="/gitHub">GIT</Link></li>
            </ul>
        </header>
    )
}
//style={{color: themeColor}}
export default Header