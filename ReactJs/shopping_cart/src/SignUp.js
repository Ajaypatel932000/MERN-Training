import React, { useState } from 'react';
import axios from 'axios';
import { BrowserRouter, Routes, Route, Link, useNavigate } from 'react-router-dom';
import './App.css'

function SignUp() {
    // States for registration
   // const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const  navigate=useNavigate();

    // States for checking the errors
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(false);

    // // Handling the name change
    // const handleName = (e) => {
    //     setName(e.target.value);
    //     setSubmitted(false);
    // };

    // Handling the email change
    const handleEmail =  (e) => {
        setEmail(e.target.value);
        setSubmitted(false);
    };

    // Handling the password change
    const handlePassword = (e) => {
        setPassword(e.target.value);
        setSubmitted(false);
    };

    // Handling the form submission
    // const handleSubmit =  (e) => {
    //     e.preventDefault();
    //     if (name === '' || email === '' || password === '') {
    //         setError(true);
    //     } else {
    //         setSubmitted(true);
    //         setError(false);
    //         navigate('/login');
    //     }
    // };
   async function handleSubmit(e){
        e.preventDefault();
        if (email === '' || password === '') {
            setError(true);
        } else {
            setSubmitted(true);
            setError(false);
            await insertSignUpData()
            //navigate('/login');
        }
    };

    function insertSignUpData()
    {
       
         axios.post('http://localhost:8282/online/addLogin', {
            email: email,
            password: password,
            isAdmin:false
            })
            .then((response) => {
                 console.log(response);
                 
                 navigate('/login');

            })
            .catch((error) => {
                console.log(error);
            });
           
    }


    // Showing success message
    const successMessage = () => {
        return (
            <div
                className="success"
                style={{
                    display: submitted ? '' : 'none',
                }}>
                <h1>User {email} successfully registered!!</h1>
            </div>
        );
    };

    // Showing error message if error is true
    const errorMessage = () => {
        return (
            <div
                className="error"
                style={{
                    display: error ? '' : 'none',
                }}>
                <h1>Please enter all the fields</h1>
            </div>
        );
    };

    return (
        <>
            <div className="form container">
                <div>
                    <h1>User Registration</h1>
                </div>

                {/* Calling to the methods */}
                <div className="messages">
                    {errorMessage()}
                    {successMessage()}
                </div>

                <form>
                  
                    <label className="label">Email</label>
                    <input onChange={handleEmail} className="input"
                        value={email} type="email" />

                    <label className="label">Password</label>
                    <input onChange={handlePassword} className="input"
                        value={password} type="password" />

                    <br/>
                    <button onClick={handleSubmit} className="btn btn-primary" type="submit">
                        Submit
                    </button>
                    <div>
                        Have you registered user ?
             <Link to="/login">
                  Login
          </Link>
         </div>
                </form>
            </div>

        </>
    )
}

export default SignUp
