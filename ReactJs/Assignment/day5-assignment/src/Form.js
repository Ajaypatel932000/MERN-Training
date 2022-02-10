
import React, { Component } from 'react'
import Dispaly from './Dispaly'

class Form extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         email:'',
         password:'',
         color:'Red',
         isCheck:false
      }
    }
    change=(event)=>{
      console.log("change")
      let {name,value}=event.target;

      if(name==="email")
      {
          
          this.setState({email:value})
         
      }
      if(name==="pwd")
      {
          this.setState({password:value})
      }

    }
    onSubmitHandler=(event)=>{
        event.preventDefault();
      let {email,password}=this.state;
      console.log(email,password)
      
    
      if(email.length>0 && password.length>0)
      {
       
        this.setState({isCheck:false})

         alert(`${this.state.email} ${this.state.password}`)
         
      }else 
      {
       //   alert("Please Enter Value ")
          this.setState({isCheck:true})
      }    
         
    }
    
    render() {
     
        return (
            <div>
            
                <form  className="row g-3" onSubmit={this.onSubmitHandler}>
                    <div className="col-auto">
                        <label htmlFor="staticEmail2" >Email</label>
                        <input type="text" className="form-control" name="email" placeholder='email@example.com' value={this.state.email} onChange={this.change} />
                        <label htmlFor="inputPassword2" >Password</label>
                        <input type="password" className="form-control" name="pwd" id="inputPassword2" value={this.state.password} placeholder="Password" onChange={this.change}/>
                    
                        <button type="submit" className="btn btn-primary mt-3">Sign in</button><br/>
                        {
                            
                            this.state.isCheck?<span style={{backgroundColor:"red"}}>Please Enter Email and Password</span>:<Dispaly name={this.state.email} pass={this.state.password}/>
                        }


                        
                        
                        
                    </div>
                </form>
            </div>
        )
    }
}

export default Form
