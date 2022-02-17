import React,{ useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';

function Login() {
// here will error
    const navigate = useNavigate();
    const [useId, setUserID] = useState();
    const [password, setPassword] = useState();
    const [arr,setCredentials]=useState([])
    // const[flag,setFlag]=useState(false);


    const loadData = () => {
        ///http://192.168.0.111:3004/
        axios.get("http://localhost:3005/login")
            .then(res => {
                console.log(res.data);
                alert('load');
                console.log(arr)
                // setTimeout(()=> {console.log('display##',arr)},2000);
                res.data.filter((user) => {
                    if (user.userId === useId && user.password === password) {
 
                          navigate("/success");

                          console.log("true :",user.userId,user.password);
                        return true;
                    }
                })

            }).catch(error => {
                console.log("api error",error);

            })


    }
    const onSubmit = (e) => {

        e.preventDefault();
        console.log('useID :', useId);
        console.log("password : ", password);
       /// navigate("/success");
        loadData()


    }

    return (
        <div>
            <h3>Login  Form.</h3>
                <div className='form-group'>
                    <label>User</label>
                    <input type='text' className="form-control" onChange={(e) => setUserID(e.target.value)} />


                </div>
                <div className='form-group'>
                    <label>Password</label>
                    <input type='password' className="form-control" onChange={(e) => setPassword(e.target.value)} />


                </div>
                <div className='form-group'>
                    <button className='btn btn-primary' onClick={onSubmit}>Login</button>

                </div>

        </div>
    )
}

export default Login
