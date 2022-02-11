import React, { Component } from 'react'
import axios from 'axios'

class ListEmployee extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         Emp:[],
         eid:0,
         SingleData:[]
      }
      console.log("Constructor");
    }
    getEmployees()
    {
        axios.get("http://localhost:3009/emp")
        .then(res=>{
            console.log(res);
            this.setState({Emp:res.data});
        })
 
    }
    getEmployeeById(id)
    {
        axios.get(`http://localhost:3009/emp/${id}`)
        .then(res=>{
            console.log(res);
            this.setState({SingleData:res.data});
            console.log("Single Data GetEmpById :",this.state.SingleData);
        })
 
    }
    componentDidMount()
    {
        console.log("Mount");
        this.getEmployees();
    }
    onDelete=(eid)=>{
        console.log('eid',eid);
        axios.delete(`http://localhost:3009/emp/${eid}`)
        .then(res=>{
            console.log("delete res",res);
             console.log(this.getEmployees());
             this.getEmployees();
            //this.setState({Emp:this.getEmployees()});
        })
    }
    onSelect=(e)=>{
  
       console.log("Emp ID :",e.target.value);
       this.getEmployeeById(e.target.value);
 
      
    }
    onSubmit=(e)=>{
        e.preventDefault();
        const URL="http://localhost:3009/emp/"+this.state.SingleData.id;
        console.log("emp :",this.state.SingleData);
        axios.put(URL,this.state.SingleData)
        .then(response=>{
            console.log("Put Request :",response);
            this.getEmployees();

         
        });
    }
    onChangeHandler=(e)=>
    {
        let{name,value}=e.target;
        let{SingleData}=this.state;
        this.setState({SingleData:{...SingleData,[name]:value}})

    }

  render() {
      let{SingleData,Emp}=this.state;
    return (
      <div>
          <h1>Update Form</h1>
         { console.log("Render") }
         <form onSubmit={this.onSubmit} method="POST">
         <div className='form-group'>
              <label>ID</label>
              <input type="text"  className='form-control' name="id" value={SingleData.id} onChange={this.onChangeHandler}/>

          </div>
          <div className='form-group'>
              <label>name</label>
              <input type="text" className='form-control' name="ename" value={SingleData.ename} onChange={this.onChangeHandler}/>

          </div>
          <div className='form-group'>
              <label>address</label>
              <input type="text" className='form-control' name="add" value={SingleData.add} onChange={this.onChangeHandler} />

          </div>
          <div className='form-group'>
              <label>city</label>
              <input type="text" className='form-control' name="city" value={SingleData.city} onChange={this.onChangeHandler} />

          </div>
          <button className='btn btn-success'>Submit</button>
         </form>
          <table className='table table-striped'>
              <thead>
                   <tr>
                       <td>ID</td>
                       <td>Name</td>
                       <td>Address</td>
                       <td>City</td>
                   </tr>
              </thead>
              <tbody>
                  {
                      Emp.map((item,idx)=>{
                          return(
                            <tr key={idx}>
                            <td>{item.id}</td>
                            <td>{item.ename}</td>
                            <td>{item.add}</td>
                            <td>{item.city}</td>
                            <td>
                                <button className='btn btn-danger' onClick={()=>this.onDelete(item.id)}>Delete</button>
                           
                            </td>
                        </tr>

                          )
                      })

                  }
              </tbody>

          </table>
          <select onChange={this.onSelect} >
              <option>Select</option>
              { 
                 this.state.Emp.map((item,idx)=>{
                  return <option key={idx} value={item.id}>{item.ename}</option>


                 })
            }
          </select>
        
      </div>
    )
  }
}

export default ListEmployee
