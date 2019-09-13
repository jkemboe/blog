import React from 'react';
import './adminmodal.css';

class AdminForm extends React.Component{
    state = {
        isVisible:false
    }
    toggleBox = () => {
             this.setState(prevState => ({isVisible: !prevState.isVisible}))
            console.log(this.state)
  
    }
    render(){
        return(
            <div className='modal'>
                <div className="modal-content">
                    <div className="modal-header">
                        <span className="close">&times;</span>
                        <h1>Signin</h1>
                    </div>
                    <div className="modal-body">
                        <p>Details</p>
                    </div>
                    <div>
                        <p>Footer</p>
                    </div>
                </div>
            </div>
        )
    }

}
 
function showModal(e){
  return e.type
}


export {AdminForm,showModal};