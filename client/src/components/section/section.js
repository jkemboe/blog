import React from 'react';
import {BrowserRouter as Router ,Link} from 'react-router-dom';
import '../section/section.css';

class MainSection extends React.Component {
    state = {
        main:[],
        img:[],
        author:[],
        body:[],
        date:Date.now(),
        intervalIsSet: false,
    }
    componentDidMount(){
        this.getDataFromDB();
        if(this.state.intervalIsSet){
            let interval = setInterval(this.getDataFromDB,1000);
            this.setState(() => {return {intervalIsSet:interval}})
        }
    }
    componentWillUnmount(){
        if(!this.state.intervalIsSet){
            clearInterval(this.state.intervalIsSet);
            this.setState(() => {return {intervalIsSet:false}})
        }
    }
    getDataFromDB = () => {
        fetch('http://127.0.0.1:4000/posts')
        .then(res => res.json())
        .then(data => {
            data.map((val) => {
                const {postTitle,postAvatar,postAuthor,postBody} = val  
                 return this.setState((prev) => {
                    return {
                        main: prev.main.concat(postTitle),
                        img: prev.img.concat(postAvatar),
                        author: prev.author.concat(postAuthor),
                        body: prev.body.concat(postBody)
                    }
                })
            });
        })
    }
    render(){
        return(
            <div>
                <Section main={this.state.main} img={this.state.img.map(val => val)} author={this.state.author} body={this.state.body} date={this.state.date}/>
            </div>
        )
    }
}

function Section(props){
    return(
        <div className="section-body">
            <Router>
            <div className="section-link">
                <Link to="#">Javascript</Link>
            </div>

    <div className="main-section">
       {props.main.map((val,i) => {
              return (
                <div className="section-head" key={i}>
                <h2>{val}</h2>
                <img src={props.img[0]} alt={props.img[0]}/>
                <span className="author-par">Author: <Link to="#" className="author">{props.author[0]}</Link></span>
                <div className="section-content">
                    <p>
                        {props.body[0]}
                    </p>
                </div>
                <Link to="/more" className="read-more">Read More</Link>
                <span className="date-style">{props.date}</span>
                
                </div>
              )
     })}
        
    </div>
            </Router>
 
        </div>
    )
}

export default MainSection;