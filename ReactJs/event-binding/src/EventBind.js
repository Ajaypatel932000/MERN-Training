import React, { Component } from 'react'

class EventBind extends Component {
   constructor(props) {
     super(props)
   
     this.state = {
         message:"hello"
     }
    //  3 rd approch code    is best approch react suggested 
    // this.clickHandler=this.clickHandler.bind(this);
   }
    // clickHandler()
    // {
    //      this.setState({
    //          message:"Good Bye"
    //      })
    //     console.log(this);
    // }

    // below code for 4 th method 
      clickHandler=()=>{
          this.setState({
              message:"Good Bye !"
          })
          console.log(this);
      }
    render() {
        return (
            <div>
                  <h1>{this.state.message}</h1>
                  <button onClick={this.clickHandler}>Click</button>

                  {/* 3 rd approch 
                   <button onClick={this.clickHandler}>Click</button> */}
   
                  {/*
                     when you have to pass parameter you used this approch 
                    arrow function in render 
                    <button onClick={()=>this.clickHandler()}>Click</button>
                   */}
                  {/* 
                        binding in render
                  <button onClick={this.clickHandler.bind(this)}>Click</button> */}
            </div>
        )
    }
}

export default EventBind
