import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams,Link } from 'react-router-dom'
function SingleData() {
    const{eid}=useParams();
    const[empData,setEmployee]=useState([])
    useEffect(()=>{
         axios.get(`http://localhost:3003/emp/${eid}`)
        .then(
            res=>(console.log(res.data),
            setEmployee([res.data]),
            console.log("UseEffect : Data Load")
            )
        ).catch(e=>console.log(e))
    },[])

    return (
    <div>
        <h1>Employee Data </h1>
        {/* {eid} */}
        {console.log("Render Executed...")}
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
                           </tr>

                          )
                      })

                  }
              </tbody>

          </table>
     
          <Link to="/" className='btn btn-outline-primary '>Logout</Link>
          <Link to="/client" className='btn btn-outline-primary '>Back</Link>

       
    </div>
  )
}

export default SingleData
