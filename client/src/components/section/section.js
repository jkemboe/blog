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
        all:[]
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
                 return this.setState((prev) => {
                    return {
                        all: prev.all.concat(val)
                    }
                })
            });
        })
    }
    render(){
        return(
            <div>
                     <Section title={this.state.all}/>
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
        {props.title.reverse().map(({postTitle,postAvatar,postAuthor,postBody,postDate,_id},i) => {
            return ( 
            <div className="section-head" key={i}> 
                <h2 key={_id}>{postTitle}</h2>
                <img src={postAvatar} alt={postAvatar}/>
                <span className="author-par">Author: <Link to="#" className="author">{postAuthor}</Link></span>
                <div className="section-content">
                    <p>{postBody}</p>
                </div>
                <Link to="/more" className="read-more">Read More</Link>
                <span className="date-style">{postDate}</span>
            </div>
            )
        })}
     </div>
            </Router>
 
        </div>
    )
}
export default MainSection;