import React, { useState,useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter, Routes, Route, Link, useNavigate } from 'react-router-dom';

function ProductUpdate({onClick,pid}) {
     // States for registration
   const [id, setId] = useState('');
   const [pname, setProductName] = useState('');
   const [desc, setDescription] = useState('');
   const [price,setPrice]=useState('');
   const  navigate=useNavigate();
   
   // States for checking the errors
   const [submitted, setSubmitted] = useState(false);
   const [error, setError] = useState(false);

   useEffect(()=>{
       getProductById()
   },[])

   // Handling the ProductName change
   const handleName =  (e) => {
       setProductName(e.target.value);
       setSubmitted(false);
   };

   // Handling the Description change
   const handleDesc = (e) => {
    setDescription(e.target.value);
       setSubmitted(false);
   };

   // Handling the Price change
   const handlePrice=(e)=>{
       setPrice(e.target.value);
       setSubmitted(false);
   }

  async function handleSubmit(e){
       e.preventDefault();
       if (pname === '' || desc === '' || price==='') {
           setError(true);
       } else {
           setSubmitted(true);
           setError(false);
           await updateProductData()
           //navigate('/login');
       }
   };
  async function getProductById()
   {
     axios.get('http://localhost:8282/product/productById/'+pid)
        .then((response) => {
             console.log("getProductById :",response);
            
             setId(response.data._id);
             setProductName(response.data.pname);
             setDescription(response.data.desc);
             setPrice(response.data.price);


        })
        .catch((error) => {
            console.log(error);
        }); 
   }

   function updateProductData()
   {
      
        axios.put('http://localhost:8282/product/updateProduct/'+id, {
           pname: pname,
           desc: desc,
           price:price
           })
           .then((response) => {
                console.log(response);
                
                //navigate('/login');
                setProductName('');
                setDescription('');
                setPrice('');
                onClick();

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
               <h1>Product {pname} successfully Inserted!!</h1>
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
    <div>
       <div className="form">
                <div>
                    <h1>Insert New Product</h1>
                </div>

                {/* Calling to the methods */}
                <div className="messages">
                    {errorMessage()}
                    {successMessage()}
                </div>

                <form>
                  
                    <label className="label">ProductName</label>
                    <input onChange={handleName} className="input"
                        value={pname} type="text" />

                    <label className="label">Description</label>
                    <input onChange={handleDesc} className="input"
                        value={desc} type="text" />

                    <label className="label">Price</label>
                    <input onChange={handlePrice} className="input"
                        value={price} type="text" />

                    <br/>
                    <div>
                    <button onClick={handleSubmit} className="btn btn-primary" type="submit">
                        Update
                    </button>
                    <Link to="/product" >
                      <button className='btn btn-primary'> Back  </button>
                    </Link>

                   </div>                  
                </form>
            </div>

      
    </div>
  )
}

export default ProductUpdate
