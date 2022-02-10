import React, { Component } from 'react';

class Message extends Component {
    constructor()
    {
        super();
        this.state={
                message:"Welcome Visitor ."
        }
    }

    // 1
    //changeMessage()
    // {
    //     this.setState({message:"Thank You ."})
    // }
     changeMessage=()=>{
        this.setState({message:"Thank You."})
    }
    render() {
        return (
            <div>
                  <h1>{this.state.message}  </h1>
                  {/*1
                   <button onClick={()=>this.changeMessage()}>Change Text</button> */}
                  <button onClick={this.changeMessage}>Change Text</button>
            </div>
        )
    }
}

export default Message;