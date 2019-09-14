import React from 'react';
import Header from '../header/header';

import './readmore.css';
function ReadMore(){
    return (
        <div>
            <Header/>
            <SectionBody/>
        </div>
    )
}

function SectionBody(){
    return (
        <div className="readmore-body">
            <div>
                <h1>FizzBuzz Challenge Rust & Javascript</h1>
            </div>
            <div>
                <p>Some Body</p>
            </div>
        </div>
    )
}

export default ReadMore;