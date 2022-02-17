import React,{useState} from 'react';
import {useNavigate} from 'react-router-dom';
function Login() {

     const[useId,setUserID]=useState();
     const[password,setPassword]=useState()
     const navigate=useNavigate();

    const onSubmit=()=>{
        console.log('submit',useId);
        console.log("password",password);

        if(useId=="admin" && password=="123")
        {
            navigate("/dashboard");
        }
    }
  return (
    <div>
            <h3>Login Form</h3>
            <div className='form-group'>
                <label>User</label>
                <input type='text' className="form-control" onChange={(e)=>setUserID(e.target.value)} />


            </div>
            <div className='form-group'>
                <label>Password</label>
                <input type='password' className="form-control"  onChange={(e)=>setPassword(e.target.value)} />


            </div>
            <div className='form-group'>
                <button className='btn btn-primary' onClick={onSubmit}>Login</button>

            </div>



    </div>
  )
}

export default Login
