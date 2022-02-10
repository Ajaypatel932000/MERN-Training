import React, { Component } from 'react'
import axios from 'axios'
class REST3 extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
          desc:[],
          users:[],
          selectedId:0
         
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
     axios.get("http://localhost:3007/user")
     .then(response=>{
         console.log(response);
         console.log("designation data :",response.data);
         this.setState({users:response.data});
     })

    }
    onDDLChange=(event)=>{
        let {value}=event.target;
        console.log(value);
        this.setState({selectedId:value});
    }
  render() {
      let {desc,users,selectedId}=this.state;
   //   console.log("Render");
    //  console.log(users);
 return (
      <div>
          
          <h1>REST2 Example.</h1>
          <select onChange={this.onDDLChange}>
              {
                  desc.map((item)=>{
                      return(
                          <option value={item.id} key={item.id}>{item.designationName}</option>
                      )
                  })
              }
          </select>
          <table className='table table-striped'>
              <thead>
                  <tr>
                      <th>ID</th>
                      <th>Name</th>
                      <th>Password</th>
                      <th>Status</th>
                  </tr>
              </thead>
              <tbody>
                  {
                     users.map((item,idx)=>{
                        return(
                            parseInt(item.did)===parseInt(selectedId) &&
                           (
                            <tr key={idx}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.password}</td>
                            <td>{item.status}</td>
                       </tr>

                           )                        )
                    })
                  }
              </tbody>
          </table>

       </div>
    )
  }
}

export default REST3
