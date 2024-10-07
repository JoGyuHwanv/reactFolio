import React from "react";
import { useSelector } from "react-redux";

function Header() {
    const user = useSelector((state) => state.user.value);
    const themeColor = useSelector((state) => state.theme.value);
    
    return (
        <header> 
            <h1>나의 포트폴리오</h1>
            <nav>
                <ul>
                    <li><a href="#about">소개</a></li>
                    <li><a href="#projects">프로젝트</a></li>
                    <li><a href="#contact">연락처</a></li>
                </ul>
            </nav>
        </header>
        // <div style={{color: themeColor}}>
        //     <h1>banch Company</h1>
        //     <p>Name : {user.name}</p>
        //     <p>Age : {user.age}</p>
        //     <p>Email : {user.email}</p>
        // </div>
    )
}
//style={{color: themeColor}}
export default Header