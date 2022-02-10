import React, { Component } from 'react'

class EventBind extends Component {
 constructor(props) {
   super(props)
 
   this.state = {
      message:"Hello "

   }
    this.clickHandler=this.clickHandler.bind(this);
 }

 // this will be undefine inside function we need required to bind method 
 clickHandler()
 {
     console.log("Clicked");
     console.log(this);
     this.setState({message:"Good Bye."})

 }
 
  render() {
    return (
      <div>
              <h1>{this.state.message}</h1>

              {/* 1 first type of event binding method  
              <button onClick={this.clickHandler.bind(this)} className="btn btn-primary">Click Here</button> */}
              {/* 2 way bind event
               <button onClick={()=>this.clickHandler()} className="btn btn-primary">Click Here</button> */}

              <button onClick={this.clickHandler} className="btn btn-primary">Click Here</button>
   
      </div>
    )
  }
}

export default EventBind
