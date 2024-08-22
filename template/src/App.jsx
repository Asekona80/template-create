import React from 'react';
import Header from './components/Header';
import Education from './components/Education';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Ref from './Components/Ref';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <Header />
      <Skills />
      <Experience />
      <Education />
      <Ref />
    </div>
  );
};

export default App;
