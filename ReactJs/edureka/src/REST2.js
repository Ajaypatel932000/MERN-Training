import React, { Component } from 'react'
import axios from 'axios'
class REST2 extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
          desc:[],
          users:[]
         
      }
      console.log("constructor");
    }
    
    componentDidMount()
    {
     console.log("DidMount");
     axios.get("http://localhost:3007/designation")
     .then(response=>{
         console.log(response);
         console.log("designation data :",response.data);
         this.setState({desc:response.data});
     })
     

    }
    onDDLChange=(event)=>{
        let {value}=event.target;    
        
        console.log(value);
    }
  render() {
      let {desc}=this.state;
   //   console.log("Render");
    //  console.log(users);
 return (
      <div>
          
          <h1>REST2 Example.</h1>
          <select onChange={this.onDDLChange}>
              {
                  desc.map((item,idx)=>{
                      return(
                          <option value={item.id} key={idx}>{item.designationName}</option>
                      )
                  })
              }
          </select>

       </div>
    )
  }
}

export default REST2
