import React, { Component } from 'react'
import axios from 'axios'
import RestTable from './RestTable'
class REST4 extends Component {
    constructor(props) {
        super(props)

        this.state = {
            empData: [],
            dep: [],
            selectedID: 0
        }
         
    }
    componentDidMount() {
        axios.get("http://localhost:3009/emp")
            .then(response => {
                console.log("empData  : ",response.data);
                this.setState({ empData: response.data });
                console.log("console :",this.state.empData);
            })
        axios.get("http://localhost:3009/dep")
            .then(response => {
                this.setState({ dep: response.data });
                console.log("dep ", response.data);
            })

    }

    onChange = (e) => {
        console.log(e.target.value);

        let { value } = e.target;
        this.setState({ selectedID: value })
    }
    render() {
        let { dep, empData, selectedID } = this.state;
        return (
            <div className='row'>
                {selectedID}

                <div className='col-md-2'>
                    <select className='form-select' onChange={this.onChange}>
                        <option value="0">SELECT DEPARTMENT</option>

                        {
                            dep.map((item, idx) => {
                                return <option value={item.did} key={idx}>{item.dname}</option>
                            })
                        }
                    </select>
                </div>

                <div className='col-md-8'>
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
                     empData.map((item,idx)=>{
                        return(
                            
                            selectedID===0?(
                                <tr key={idx}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.salary}</td>
                                <td>{item.did}</td>
                              </tr>
                            ):(parseInt(item.did)===parseInt(selectedID) &&
                            (
                             <tr key={idx}>
                              <td>{item.id}</td>
                              <td>{item.name}</td>
                              <td>{item.salary}</td>
                              <td>{item.did}</td>
                            </tr>
                           ))
                          )
                    })
                  }
              </tbody>
          </table>
                   
                </div>

            </div>
        )
    }
}

export default REST4

{/* <table className='table'>
<thead>
    <tr>
        <th>ID</th>
        <th>Name</th>
        <td>Salary</td>

    </tr>
</thead>

<tbody>
    {
        empData.map((item, idx) => {
            <tr key={idx}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.salary}</td>
                <td>{item.did}</td>

            </tr>


        })
    }
</tbody>
</table> */}