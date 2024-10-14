//import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from './components/Header';
import About from './components/pages/About';
import Projects from './components/pages/Projects';
import Github from './components/pages/Github';
import Home from './components/pages/Home';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Wrapper from '../src/components/Wrapper';
import ScrollTop from '../src/components/ScrollToTop';

function App() {
  return (
    <AnimatePresence mode='wait'>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <ScrollTop />
        <Header/>
        {/* <Heading/> */}
        <Routes>
          <Route path='/' Component={Home}/>
          <Route path='/about' Component={About}/>
          <Route path='/projects' Component={Projects}/>
          <Route path='/gitHub' Component={Github}/>
        </Routes>
      </BrowserRouter>
    </AnimatePresence>
  );
}
export default App;
