import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Header from './components/header/header';
import Section from './components/section/section';
import Footer from './components/footer/footer';

import AdminPanel from './components/adminpanel/adminpanel';
import ReadMore from './components/readmore/readmore';

import './App.css';

function Main() {
  return (
    <Router>
        <Route exact path="/" component={App}/>
        <Route exact path="/admin" component={AdminPanel}/>
        <Route exact path="/more" component={ReadMore}/>
    </Router>
  )
}

function App() {
  return (
    <div> 
        <Header/>
        <div className="main">
          <Section/>
        </div>
        <Footer/>
    </div>
  );
}



export default Main;
