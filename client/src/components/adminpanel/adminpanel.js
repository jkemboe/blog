import React from 'react';
import axios from 'axios';
import './adminpanel.css';

class AdminPanel extends React.Component{
    state = {
        title:'',
        img:'',
        author:'',
        feature:'',
        tag:'',
        body:''
    }
    getTitleData = (e) => {
        let text = e.target.value
        let target = e.target.name 
        if(target === 'title'){
            this.setState(() => ({title:text}))
        } else if(target === 'img'){
            this.setState(() => ({img:text}))
        } else if(target === 'author'){
            this.setState(() => ({author:text}))
        } else if(target === 'feature'){
            this.setState(() => ({feature:text}))
        } else if(target === 'tag'){
            this.setState(() => ({tag:text}))
        } else if(target === 'blogBody'){
            this.setState(() => ({body:text}))
        }
    }
    putDataToDb = () => {
        let url = 'http://127.0.0.1:4000/posts';
        let {author, body, feature, img, tag, title} = this.state
        axios.post(url,{
            postTitle:title,
            postAvatar:img,
            postAuthor: author,
            postBody:body,
            postFeature: feature,
            postTag: tag
        })
    }
    render(){
        return(
            <div className="admin">
                <h1>UPDATE BLOG</h1>
                <form method="POST" action="http://127.0.0.1:4000/posts" encType="multipart/form-data">
                <div className="flex-container"> 
                        <div className="flex-child">
                            <label>Title</label>
                            <input type="text" placeholder="Title" name="title" onChange={this.getTitleData}/>
                            <label>Attach Image (PNG Format)</label>
                            <input type="text" name="img" onChange={this.getTitleData}/>
                            <label>Author:</label>
                            <input type="text" placeholder="Author" name="author" onChange={this.getTitleData}/>
                        </div>
                        <div className="flex-child1">
                            <label>Feature</label>
                                <select name="feature" onChange={this.getTitleData}>
                                    <option>True</option>
                                    <option>False</option>
                                </select>
                            <label>Tag</label>
                                <select name="tag" onChange={this.getTitleData}>
                                    <option>World</option>
                                    <option>US Politics</option>
                                    <option>Business</option>
                                    <option>Health</option>
                                    <option>Entertainment</option>
                                    <option>Travel</option>
                                    <option>Tech</option>
                                    <option>Sports</option>
                                </select>
                        </div>
                </div>
                <div className="blog-container">
                            <label>Blog Content:</label>
                            <textarea rows="20" cols="100" name="blogBody" onChange={this.getTitleData}></textarea>
                            <input type="submit" onClick={this.putDataToDb}/>
                </div>
                </form>
            </div>
        )
    }

}
 
 

export default AdminPanel;