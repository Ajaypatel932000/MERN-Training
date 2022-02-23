import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import myUserID from '../LoginObject'
import Cart from './Cart'
import axios from 'axios'

function MyOrder() {
   const[order,setOrder]=useState([]); 
   useEffect(()=>{
         getProductDetails();
   },[])
 const getProductDetails = () => {
        axios.get("http://localhost:8282/orders")
            .then(response => {
                console.log(response);
                console.log("orders :", response.data);
                //setProductDetails(response.data);
                setOrder(response.data);


            }).catch(err => {
                console.log("error in show product", err);
            })
    }

    return (
        <div className='container'>
            <Cart/>
               
          {
              order.map((item,idx)=>
               <div key={idx}>
                   <h2>{item.userId}</h2>
                   <h2>{item.total_price}</h2>
                   <h2>{item.status}</h2>
               <ul>
                   {
                       item.product.map((sub)=>
                       <div>
                          <li>{sub.pname}</li>
                          <li>{sub.price}</li>
                          <li>{sub.desc}</li>
                        </div>
                       )
                   }
               </ul>
               </div>
              )
          }
         

            {/* <ul className="pager">
                <li className="previous"><Link to="/">Previous</Link></li>
                <li className="next"><Link to="/" >Next</Link></li>
            </ul> */}
        </div>
    )
}

export default MyOrder
