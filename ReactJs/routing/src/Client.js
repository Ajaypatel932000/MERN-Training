import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function Client() {
    const [empData, setEmployee] = useState([]);
    const [singleData, setSingleEmployee] = useState()
    const [id, setId] = useState()
     
    useEffect(() => {
        
        axios.get("http://localhost:3003/emp")
            .then(
                res => setEmployee(res.data)

            ).catch(e => console.log(e))
    }, [])
    const onClickHandler = (id) => {
        // setId("/single/"+id)
        // axios.get(`http://localhost:3006/emp/${id}`)
        // .then(
        //     res=>(setSingleEmployee(res.data),
        //    console.log(res.data))
        // ).catch(e=>console.log(e))

    }
    const showHandler=(cid)=>{
        
        console.log("id :",id);
         
    }
    return (

        <div>
            {console.log("render")}
            <div className="list-group col-1 d-grid">
                <ul className=''>
                    <li><Link className='btn btn-outline-primary gap-2 d-md-block' to="/dashboard">Dashboard</Link></li>
                    <li><Link className='btn btn-outline-primary gap-2 d-md-block' to="/client">Client</Link> </li>
                    <li><Link className='btn btn-outline-primary gap-2 d-md-block' to="/vendor">Vendor</Link></li>

                </ul>
            </div>

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
                        empData.map((item, idx) => {
                            return (
                             <>
                                    <tr key={idx}>
                                    <td>{item.id}</td>
                                    <td>{item.ename}</td>
                                    <td>{item.add}</td>
                                    <td>{item.city}</td>
                                    <td>
                                        {/* <Link to={id} className='btn btn-primary' onClick={()=>onClickHandler(item.id)}>Select</Link> */}
                                        <Link to={`/single/${item.id}`} className='btn btn-primary'>Select</Link>
                                        <button   className='btn btn-primary' onClick={()=>setId(item.id)}>Show</button>

                                    </td>  
                                </tr>
                                {id===item.id && <tr key={idx}>
                                    <td>{item.id}</td>
                                    <td>{item.ename}</td>
                                    <td>{item.add}</td>
                                    <td>{item.city}</td>
                                    <td>
                                        {/* <Link to={id} className='btn btn-primary' onClick={()=>onClickHandler(item.id)}>Select</Link> */}
                                        <Link to={`/single/${item.id}`} className='btn btn-primary'>Select</Link>
                                        <button   className='btn btn-primary' onClick={()=>showHandler(item.id)}>Show</button>

                                    </td>  
                                </tr>}
                             </>
                           
                                )})
                        }
                               
                              

                          
                </tbody>

            </table>
            <Link to="/" className='btn btn-outline-primary '>Logout</Link>

        </div>
    )
}

export default Client
