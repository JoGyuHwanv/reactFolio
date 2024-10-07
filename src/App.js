//import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/about' Component={About}/>
        <Route path='/projects' Component={Projects}/>
        <Route path='/contact' Component={Contact}/>
      </Routes>
      {/* <Link to="/about">about</Link>
      <Link to="/projects">projects</Link>
      <Link to="/contact">contact</Link> */}
    </BrowserRouter>

    // <div className='App'>
    //   <Header/>
    //   <Body/>
    //   <ChangeColor/>
    //   <Button size="small" color="blue">Button</Button>
    //   <Button size="small" color="red">Button</Button>
    //   <Button size="small" color="black">Button</Button>
    //   <Button outline>Button</Button>
    // </div>
  );
}
//coding music gnidoc Developer repoleved programmer
export default App;
