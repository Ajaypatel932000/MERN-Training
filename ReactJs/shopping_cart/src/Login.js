import { Link, useNavigate } from 'react-router-dom';
import React, { useState,useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from 'axios';
import LoginObject from './LoginObject';
import myUserID from './LoginObject';


function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loginDetails,setLoginDetails]=useState([])
    const navigate = useNavigate();
    function validateForm() {
        return email.length > 0 && password.length > 3;
    }

    useEffect(()=>{
                getLoginDetails()
          },[])
    function getLoginDetails()
    {
        axios.get('http://localhost:8282/online')
        .then((response) => {
            console.log(response);
            setLoginDetails(response.data);
            
        })
        .catch((error) => {
            console.log(error);
        })
    }
    async function handleSubmit(event) {
        event.preventDefault();
        await validateLogin()

        console.log("email " + email);
        console.log("passwrod", password);
    }
    function validateLogin() {
      loginDetails.forEach((item)=>{
               myUserID.email=email;
            console.log("validation");
        if (item.email === email && item.password === password && item.isAdmin === true) {
          //  console.log("Admin");
             navigate("/product");


        } else if (item.email === email && item.password === password && item.isAdmin === false) {           
          //  console.log("User");
            navigate("/userDashboard")        
        } 
      })
    }

    return (
        <>
            <div className="Login container">
                <h1>Login</h1>
                <Form onSubmit={handleSubmit}>
                    <Form.Group size="lg" controlId="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            autoFocus
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group size="lg" controlId="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </Form.Group>
                    <Button block size="lg" type="submit" disabled={!validateForm()}>
                        Login
                    </Button>
                    <br />
                    <div>
                        Are you new user ?
                        <Link to="/signup">
                            Register
                        </Link>
                    </div>
                </Form>
            </div>

        </>
    )
}
export default Login;



