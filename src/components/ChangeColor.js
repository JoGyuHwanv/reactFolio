import React, {useState} from "react";
import { useDispatch } from "react-redux";
import { changeColor } from '../redux/Theme';

function ChangeColor() {
    const [color, setColor] = useState('');
    const dispatch = useDispatch();

    return (
        <div>
            <input type='text' onChange={e => {setColor(e.target.value);}}></input>
            {/* <input input type='text' onChange={() => {dispatch(changeColor('teal'));}}></input> */}
            {/* <input type='text' onChange={e => {dispatch(changeColor(e.target.value));}}></input> */}
            <button onClick={() => {dispatch(changeColor(color))}}>CHANGE COLOR</button>
        </div>
    )
}
export default ChangeColor
