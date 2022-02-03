import React,{Component} from "react";

class Message extends Component
{
    constructor()
    {
        super();
        this.state={
            msg:"Welcome Ajay "
        }


    }
    changeMessage()
    {
        this.setState({
            msg:"You have Changed "
        })
    }

    render(){
        return(
                 <>
                   <h1>Message : {this.props.name}</h1>
                   <hr/>
                   <h2>{this.state.msg}</h2>
                   <button onClick={()=>this.changeMessage()}>Click</button>
                 </>
         )
        }
}

export default Message;