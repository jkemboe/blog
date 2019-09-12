import React from 'react';
import {BrowserRouter as Router,Link} from 'react-router-dom';
import '../header/header.css';

function Header(){
    return (
        <div className="top-nav">
            <div className="top-nav-h1">
                <h1>BCC</h1>
             </div>
            <Router>
                <div className="top-nav-link">
                    <Link to="#" className="sign">Sign In</Link>
                    <Link to="#">World</Link>
                    <Link to="#">US Politics</Link>
                    <Link to="#">Business</Link>
                    <Link to="#">Health</Link>
                    <Link to="#">Entertainment</Link>
                    <Link to="#">Travel</Link>
                    <Link to="#">Tech</Link>
                    <Link to="#">Sports</Link>
                </div>
            </Router>
            <div className="top-nav-search">
                <input type="text" placeholder="search"></input>
            </div>
        </div>
    )
}

export default Header;