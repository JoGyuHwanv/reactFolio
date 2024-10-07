//import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Github from './components/Github';
import Home from './components/Home';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/home' Component={Home}/>
        <Route path='/about' Component={About}/>
        <Route path='/projects' Component={Projects}/>
        <Route path='/gitHub' Component={Github}/>
      </Routes>
    </BrowserRouter>
  );
}
//coding music gnidoc Developer repoleved programmer
export default App;
