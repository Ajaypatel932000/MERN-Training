import React,{Component} from 'react';
import axios from 'axios';

class InsertAPI extends Component {

    constructor(props) {
      super(props)
    
      this.state={
        Employee:{id:'',ename:'',add:'',city:''},
        showMeg:''
    }
    }
    
    onSubmit=(e)=>{
        e.preventDefault();
        const URL="http://localhost:3009/emp";
        console.log("emp :",this.state.Employee);
        axios.post(URL,this.state.Employee)
        .then(response=>{
            console.log(response);
            if(response.statusText==="Created")
            {
                this.setState({showMeg:"Recored Inserted "})
            }
        });

       
    }
    onChangeHandler=(e)=>
    {
        let{name,value}=e.target;
        let{Employee}=this.state;
        this.setState({Employee:{...Employee,[name]:value}})

    }

  render() {
      let{Employee,showMeg}=this.state;
    return (
      <div>
          <span className='alert-success'>{showMeg}</span>
         <form onSubmit={this.onSubmit} method="POST">
         <div className='form-group'>
              <label>ID</label>
              <input type="text"  className='form-control' name="id" value={Employee.id} onChange={this.onChangeHandler}/>

          </div>
          <div className='form-group'>
              <label>name</label>
              <input type="text" className='form-control' name="ename" value={Employee.ename} onChange={this.onChangeHandler}/>

          </div>
          <div className='form-group'>
              <label>address</label>
              <input type="text" className='form-control' name="add" value={Employee.add} onChange={this.onChangeHandler} />

          </div>
          <div className='form-group'>
              <label>city</label>
              <input type="text" className='form-control' name="city" value={Employee.city} onChange={this.onChangeHandler} />

          </div>
          <button>Submit</button>
         </form>
        
      </div>
    )
  }
}

export default InsertAPI
