//import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from './components/Header';
import About from './components/pages/About';
import Projects from './components/pages/Projects';
import Github from './components/pages/Github';
import Home from './components/pages/Home';
import Heading from '../src/components/Heading';

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
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
  );
}
//coding music gnidoc Developer repoleved programmer
export default App;
