import React from 'react';
import './adminpanel.css';

class AdminPanel extends React.Component{
    render(){
        return(
            <div>
                <h1>UPDATE BLOG</h1>
                <form>
                    <label>Title</label>
                    <input type="text"/>
                </form>
            </div>
        )
    }

}
 
 

export default AdminPanel;