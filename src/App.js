//import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from './components/Header';
import About from './components/pages/About';
import Projects from './components/pages/Projects';
import Github from './components/pages/Github';
import Home from './components/pages/Home';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import styled from 'styled-components';
import img from '../src/assets/image/codingImg2.webp';

function App() {
  return (
    <BackStyled>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Header/>
        {/* <Heading/> */}
        <Routes>
          <Route path='/' Component={Home}/>
          <Route path='/about' Component={About}/>
          <Route path='/projects' Component={Projects}/>
          <Route path='/gitHub' Component={Github}/>
        </Routes>
      </BrowserRouter>
    </BackStyled>
  );
}

const BackStyled = styled.div`
  background-image: linear-gradient(
    to right,
    rgba(20, 20, 20, 0.5) 10%,
    rgba(20, 20, 20, 0.8) 25%,
    rgba(20, 20, 20, 1) 50%,
    rgba(20, 20, 20, 1) 75%,
    rgba(20, 20, 20, 1) 100%),
    url(${img});
    //url("../src/assets/image/codingImg2.webp");
  /* background-position: center center; */
  background-repeat:  no-repeat;
  background-attachment: fixed;
  background-size: 100% 100%;
  // height: 100vh;
  // width: 100vw;
`;
//coding music gnidoc Developer repoleved programmer
export default App;
