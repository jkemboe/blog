import React from 'react';
import {BrowserRouter as Router ,Link} from 'react-router-dom';
import '../section/section.css';

function Section(){
    return(
        <div className="section-body">
            <Router>
                <div className="section-link">
                    <Link to="#">Business</Link>
                </div>
            <div className="section-head">
                <h2>Blog Title</h2>
                <img alt="Section Image"/>
                <span className="author-par">Author: <Link to="#" className="author">Maasai Sang</Link></span>
                <div className="section-content">
                    <p>Lorem Ipsum: Author: Maasai Sang
                    Lorem Ipsum: Author: 
                    </p>
                </div>
             
                <Link to="#" className="read-more">Read More</Link>
                <span className="date-style">Date: 09/9/2019</span>
            </div>
            </Router>
           
        </div>
    )
}

export default Section;