import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import myUserID from '../LoginObject'
import Cart from './Cart'
import axios from 'axios'

function MyOrder() {
   const[order,setOrder]=useState([]); 
   const[total,setTotal]=useState(0);
   const[tax,setTax]=useState(40);
   const[shipcharge,setShipCharge]=useState(70);
   const[showtotal,setShowTotal]=useState(false);
   const[finalamt,setFinalAmount]=useState(0);
   const[msg,setMsg]=useState("");
   const[state,setState]=useState(false);
      
   useEffect(()=>{
         getProductDetails();
   },[])
   
   const orderPlaced=()=>{
    axios.put("http://localhost:8282/orders/updateOrder/"+myUserID.email, {
        total_price: finalamt
        })
        .then((response) => {
             console.log(response);
             if(response.statusText === "OK")
             {
                setState(true);
                setMsg("Order Placed Succesfully.."); 
             }
            
        })
        .catch((error) => {
            console.log(error);
        });
   
   }
   const onClickH=()=>{
   
        setShowTotal(!showtotal);
    let mytotal=0;
    order.forEach((item)=>{
        item.product.map((subitem)=>{
            // console.log("subitem",subitem.price);
            mytotal=mytotal + subitem.price;
             console.log("total",mytotal);
        })
    })
    setTotal(mytotal);

    var finaltotal = total + tax + shipcharge;
    
    setFinalAmount(finaltotal)
}
 const getProductDetails = () => {
        axios.get("http://localhost:8282/orders/orderById/"+myUserID.email)
            .then(response => {
                console.log(response);
                console.log("orders :", response.data);
                //setProductDetails(response.data);
                setOrder([...response.data]);


            }).catch(err => {
                console.log("error in show product", err);
            })
    }

    return (
        <div className='container'>
          <h2>Your Cart List </h2>
            <table className='table table-striped'>
        <tbody>
        <tr>
                <th>Product Name</th>
                <th>Description</th>
                <th>Price</th>
                </tr>
        {
              order.map((item,idx)=>
              <>
                   {
                       item.product.map((sub)=>
                       <>
                        <tr key={idx}>
                          <td>{sub.pname}</td>
                          <td>{sub.desc}</td>
                          <td>{sub.price}</td>
                          <td> <Cart/></td>
                          </tr>

                       </>
                       )
                   }
                </>
              )
          }
          </tbody>
          </table>      
         <div>
    
          {/* <button className='btn btn-primary' onClick={onClickH}>Final Amount</button> */}
         <button className='btn btn-primary' onClick={orderPlaced}>Place Order</button>
         </div>
         <div>
            {showtotal===true ? <div className='container container-fluid alert alert-warning'>
            <div>Order amount : {total}</div>
            <div>Sales tax : {tax}</div>
            <div>Shipping charges: {shipcharge}</div>
            <div>Final Amount: Rs {finalamt}</div>
            </div>
            :null}

         </div>
            

            { state==true?msg:null}
        </div>
    )
}

export default MyOrder

// {
//     order.map((item,idx)=>
//      <div key={idx}>
//          <h2>{item.userId}</h2>
//          <h2>{item.total_price}</h2>
//          <h2>{item.status}</h2>
//      <ul>
//          {
//              item.product.map((sub)=>
//              <div>
//                 <li>{sub.pname}</li>
//                 <li>{sub.price}</li>
//                 <li>{sub.desc}</li>
//               </div>
//              )
//          }
//      </ul>
//      </div>
//     )
// }