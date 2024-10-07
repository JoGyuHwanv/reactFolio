//import logo from './logo.svg';
import './App.css';
import Body from './components/Body';
import ChangeColor from './components/ChangeColor';
import Button from './components/Button';

import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div>
      <Header />
      <About />
      <Projects />
      <Contact />
    </div>

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
