import React from 'react';
import './adminpanel.css';

class AdminPanel extends React.Component{
    render(){
        return(
            <div className="admin">
                <h1>UPDATE BLOG</h1>
                <form method="POST" action="/admin/post">
                <div className="flex-container"> 
                        <div className="flex-child">
                            <label>Title</label>
                            <input type="text" placeholder="Title" name="title"/>
                            <label>Image URL</label>
                            <input type="text" placeholder="Image URL" name="img"/>
                            <label>Author:</label>
                            <input type="text" placeholder="Author" name="author"/>
                        </div>
                        <div className="flex-child1">
                            <label>Feature</label>
                                <select name="feature">
                                    <option>True</option>
                                    <option>False</option>
                                </select>
                            <label>Tag</label>
                                <select name="tag">
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
                            <textarea rows="20" cols="100" name="blogBody"></textarea>
                            <input type="submit" placeholder="Submit"/>
                        </div>
                </form>
            </div>
        )
    }

}
 
 

export default AdminPanel;