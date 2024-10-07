import React from "react";
import { useDispatch } from "react-redux";
import { login, logout } from '../redux/User'

function Body() {
    const dispatch = useDispatch();
    
    return (
        <div>
            <button onClick={() => { dispatch(login({name: "내 이름", age: 32, email: 'email@email.com'}))}}>Login</button>
            <button onClick={() => { dispatch(logout())}}>Logout</button>
        </div>
    )
}       

export default Body