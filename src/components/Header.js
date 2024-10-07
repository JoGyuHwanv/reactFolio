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
                <li><Link to="/reactFolio">HOME</Link></li>
                <li><Link to="/reactFolio/about">ABOUT</Link></li>
                <li><Link to="/reactFolio/projects">PROJECT</Link></li>
                <li><Link to="/reactFolio/gitHub">GIT</Link></li>
            </ul>
        </header>
    )
}
//style={{color: themeColor}}
export default Header