import React, { Component } from 'react'
import axios from 'axios'
class REST extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
          users:[]
         
      }
      console.log("constructor");
    }
    
    componentDidMount()
    {
     console.log("DidMount");
     axios.get("http://localhost:3007/user")
     .then(response=>{
         console.log(response);
         console.log("data :",response.data);
         this.setState({users:response.data});
     })

    }
  render() {
      let {users}=this.state;
   //   console.log("Render");
    //  console.log(users);
 return (
      <div>
          {users.name}
          <h1>REST Example.</h1>
          <table className='table table-striped'>
              <thead>
                  <tr>
                      <th>ID</th>
                      <th>Name</th>
                      <th>Password</th>
                      <th>Status</th>
                      <th>designationID</th>
                  </tr>
              </thead>
              <tbody>
                  {
                      users.map((item,idx)=>{
                          return(
                              <tr key={idx}>
                                   <td>{item.id}</td>
                                   <td>{item.name}</td>
                                   <td>{item.password}</td>
                                   <td>{item.status}</td>
                                   <td>{item.did}</td>
                              </tr>
                          )
                      })
                  }
              </tbody>
          </table>
      </div>
    )
  }
}

export default REST
