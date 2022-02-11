import axios from 'axios';
import React,{useState,useEffect} from 'react'
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom'

function Client() {
   const [empData,setEmployee]=useState([]);
   const [singleData,setSingleEmployee]=useState()
   const [id,setId]=useState('')
    useEffect(()=>{
        axios.get("http://localhost:3006/emp")
        .then(
            res=>setEmployee(res.data)

        ).catch(e=>console.log(e))
    },[])
    const onClickHandler=(id)=>
    {
        setId("/single/"+id)
        // axios.get(`http://localhost:3006/emp/${id}`)
        // .then(
        //     res=>(setSingleEmployee(res.data),
        //    console.log(res.data))
        // ).catch(e=>console.log(e))

    }
  return (

    <div>
              {console.log("render")}
      <h1>Client Component</h1>
      <table className='table table-striped'>
              <thead>
                   <tr>
                       <td>ID</td>
                       <td>Name</td>
                       <td>Address</td>
                       <td>City</td>
                   </tr>
              </thead>
              <tbody>
                  {
                      empData.map((item,idx)=>{
                          return(
                            <tr key={idx}>
                            <td>{item.id}</td>
                            <td>{item.ename}</td>
                            <td>{item.add}</td>
                            <td>{item.city}</td>
                            <td>
                               <Link to={id} className='btn btn-primary' onClick={()=>onClickHandler(item.id)}>Select</Link>
                               {/* <Link to={id}> <button className='btn btn-primary' onClick={()=>onClickHandler(item.id)}>Select</button></Link>
                            */}
                            </td>
                        </tr>

                          )
                      })

                  }
              </tbody>

          </table>
         
    </div>
  )
}

export default Client
