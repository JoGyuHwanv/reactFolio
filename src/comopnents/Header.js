import React from "react";
import { useSelector } from "react-redux";

function Header() {
    const user = useSelector((state) => state.user.value);
    const themeColor = useSelector((state) => state.theme.value);
    
    return (
        <div>
            <h1>banch Company</h1>
            {/* <p>Name : {user.name}</p>
            <p>Age : {user.age}</p>
            <p>Email : {user.email}</p> */}
        </div>
    )
}
//style={{color: themeColor}}
export default Header