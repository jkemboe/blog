import React from 'react';
import {BrowserRouter as Router,Link} from 'react-router-dom';
import '../header/header.css';
import '../header/adminmodal.css';
import PersonSvg from './img/icon.svg';
 
class Header extends React.Component {
    state = {
        isVisible:true
    }
    toggleBox = () => this.setState(prevState => ({isVisible: !prevState.isVisible}));
    render(){
        const {isVisible} = this.state
        window.addEventListener('click', (e) => {
                if(e.target.className === 'modal open'){
                   return this.toggleBox()
                }
        });
        return (
            <div>
                <div className="top-nav">
                    <div className="top-nav-h1">
                        <h1>BCC</h1>
                    </div>
                    <Router>
                        <div className="icon-nav-link">
                            <Link to="#" className="sign" onClick={this.toggleBox}><img src={PersonSvg} alt="icon"/></Link>
                        </div>
                        <div className="top-nav-link">
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
                        <input type="text" placeholder="Search"></input>
                    </div>
                </div>

                <div className={`modal ${isVisible ? "" : "open"}`}>
                    <div className="modal-content">
                        <div className="modal-header">
                            <span className="close" onClick={this.toggleBox}>&times;</span>
                            <h1>Signin</h1>
                        </div>
                        <div className="modal-body">
                             <form action="/admin">
                                <label>Username</label>
                                 <input type="email" placeholder="Username or Email"/>
                                 <label>Password</label>
                                 <input type="text" placeholder="Password"/>
                                 <input className="submit-btn" type="submit" placeholder="Submit"/>
                             </form>
                        </div>
                        <div className="modal-footer">
                            <p>Only Page Admins with @Blog's Credentials are allowed to log in</p>
                        </div>
                    </div>
                </div>

             </div>
        )
    }
}

export default Header;