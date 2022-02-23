import React, { useEffect, useState } from 'react'
import axios from 'axios';
import ProductUpdate from './ProductUpdate';
import { Link } from 'react-router-dom';
function ShowProduct() {
   
    const [productData,setProductDetails]=useState([]);
    const [isEdit,setEdit]=useState(false);
    const [id,setId]=useState('');
    useEffect(()=>{
       getProductDetails();
    },[])
    const changeState=()=>{
        getProductDetails();
        setEdit(false);
    }
    const updateProduct=(id)=>{
        console.log("Update Event ",id);
        setId(id);
        setEdit(true);

    }

    const getProductDetails=()=>
    {
        axios.get("http://localhost:8282/product")
        .then(response=>{
            console.log(response);
            console.log("data :",response.data);
            setProductDetails(response.data);
        }).catch(err=>{
            console.log("error in show product",err);
        })
    }
    const deleteProduct=(id)=>{
        console.log("id ",id);
        //deleteProduct
        axios.delete("http://localhost:8282/product/deleteProduct/"+id)
        .then(response=>{
            console.log("delete :",response.data);
            getProductDetails();

        }).catch(err=>{
            console.log("error in show product",err);
        })

    }

  return (
    <div>
      Show Product.<Link to="/login" ><button className='btn btn-primary'>Logout</button> </Link>
      <Link to="/product" ><button className='btn btn-primary'>Back</button> </Link>
      <table className='table table-striped'>
              <thead>
                  <tr>
                      <th>ProductName</th>
                      <th>Description</th>
                      <th>Price</th>
                      <th></th>
                  </tr>
              </thead>
              <tbody>
                  {
                      productData.map((item,idx)=>{
                          return(
                              <tr key={idx}>
                                   <td>{item.pname}</td>
                                   <td>{item.desc}</td>
                                   <td>{item.price}</td>
                                   <td><button  className="btn btn-warning" onClick={()=>updateProduct(item._id)}>Edit</button></td>
                                   <td><button onClick={()=>deleteProduct(item._id)} className="btn btn-danger">Delete</button></td>

                              </tr>
                          )
                      })
                  }
              </tbody>
          </table>
           
           {
                isEdit?(<ProductUpdate onClick={changeState} pid={id} />):null
           }  

      </div>


  )
}

export default ShowProduct
