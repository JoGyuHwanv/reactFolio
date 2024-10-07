import classNames from "classnames";
import React from "react";
import "../style/Button.scss";
import { useDispatch } from "react-redux";
import { changeColor } from '../redux/Theme';

function Button({ children, size, color, outline }){
    const dispatch = useDispatch();
    return (
        <button onClick={e => {dispatch(changeColor(color))}} className={classNames("Button", size, color, { outline })}>Button</button>
    )
}

Button.defaultProps = {
    size: "medium",
    color: "black"
};
export default Button;