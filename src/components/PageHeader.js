import React from "react";
import styled from "styled-components";

function Heading(props) {
    let heading = "";
    console.log(props);
    
    switch(props.level) {
        case '0': 
        return (
            <StyleHeading>
                <div className='title'>
                    <h1>ABOUT <span>Me</span></h1>
                </div>
            </StyleHeading> 
        )
        case '1': 
        return (
            <StyleHeading>
                <div className='title'>
                    <h1>ABOUT <span>Me</span></h1>
                </div>
            </StyleHeading> 
        )
        case '2': 
        return (
            <StyleHeading>
                <div className='title'>
                    <h1><span>MY</span> PROJECTS</h1>
                </div>
            </StyleHeading> 
        )
    }
}

const StyleHeading = styled.div`
.title {
    position: relative;
    padding: 80px 0px;
    text-align: center;
    
    h1{
        font-size: 56px;
        font-weight: 900;
        text-transform: uppercase;
        margin: 10px auto;
    }
}`;
export default Heading;