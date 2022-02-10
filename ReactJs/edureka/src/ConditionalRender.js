import React, { Component } from 'react'

class ConditionalRender extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn:false
      }
      this.clickHandler=this.clickHandler.bind(this);
    }
    
    clickHandler()
    {
        this.setState({isLoggedIn:!this.state.isLoggedIn})

    }
    render() {
        return (
            <div>
               {
                  this.state.isLoggedIn?<h1>Welcome Ajay </h1>:<h1>Welcome Guest</h1>
               }
             <button onClick={this.clickHandler} className="btn btn-primary">Login</button>
            </div>
        )
    }
}

export default ConditionalRender
