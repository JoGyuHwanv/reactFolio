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
        <Route path='/reactFolio' Component={Home}/>
        <Route path='/reactFolio/about' Component={About}/>
        <Route path='/reactFolio/projects' Component={Projects}/>
        <Route path='/reactFolio/gitHub' Component={Github}/>
      </Routes>
    </BrowserRouter>
  );
}
//coding music gnidoc Developer repoleved programmer
export default App;
