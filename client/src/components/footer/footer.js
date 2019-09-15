import React from 'react';
import GitHubButton from 'react-github-btn';

import './footer.css';

function Footer(){
    return (
        <div className="footer">
            <h2>Github: </h2>
            <GitHubButton href="https://github.com/jkemboe" data-size="large" aria-label="Follow @jkemboe on GitHub">Follow @jkemboe</GitHubButton>
        <div>
            <span>Technologies used to create this website: React with vanilla CSS, MongoDB, Express, Nodejs</span>
        </div>
        </div>
    )
}

export default Footer;