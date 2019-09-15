import React from 'react';
import {Link} from 'react-router-dom';

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
        <div className="container-flex">
            <div className="trending-topics">
                <h2>Trending Topics<span className="view-more">+</span></h2>
            </div>
            <div className="more-topics">
                    <li><Link to="#">Javascript Async Await features</Link></li>
                    <li><Link to="#">HTML5 Canvas</Link></li>
                    <li><Link to="#">CSS3 Animations and Keyframes</Link></li>
                    <li><Link to="#">The ES6 Spread Operator</Link></li>
            </div>
            <div className="readmore-body">
                <div>
                    <h1>FizzBuzz Challenge Rust & Javascript</h1>
                </div>
                <div>
                    <span>Author: Maasai Sang</span><br/><span>4min read</span>
                </div>
                <div>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse dolor mauris, ornare nec ultrices nec, ultrices non ex. Nullam rutrum ante vel lobortis rhoncus. Duis a tempor neque. Morbi varius gravida lectus sed fringilla. Duis ante sem, sollicitudin ac tincidunt ut, malesuada in orci. Curabitur lacus est, maximus ut tempor non, commodo at lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris sit amet mauris velit. Proin vel ornare augue. Phasellus lectus mauris, blandit auctor viverra non, interdum vel magna. Vestibulum pharetra non felis id vulputate. Aliquam tincidunt ornare elit, vitae blandit sapien semper eget. Phasellus sed dolor non eros sodales dapibus ac in velit. Integer quis odio quis tellus condimentum pharetra sit amet egestas turpis. Nullam consequat id purus ac cursus.

    Nunc sit amet sem et ex pharetra dictum. Vivamus et tempor tortor. Etiam sit amet faucibus tellus. In auctor laoreet nunc ac sodales. Cras viverra, sapien vitae accumsan lacinia, orci felis cursus dui, in commodo urna quam in turpis. Nunc nec lectus vel enim porta molestie. Cras purus mi, dapibus a dui ut, porttitor tempor mauris. Mauris ut orci pulvinar, tincidunt est a, lacinia lacus. Curabitur vel purus massa. Integer elementum id.
                    </p>
                </div>
            </div>
        </div>
    
    )
}

export default ReadMore;