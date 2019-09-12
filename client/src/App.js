import React from 'react';
import Header from './components/header/header';
import Section from './components/section/section';
import './App.css';

function App() {
  return (
    <div> 
        <Header/>
        <div className="main">
          <Section/>
        </div>
    </div>
  );
}

export default App;
