import React from 'react'
import {BrowserRouter,Route,Routes,Link} from 'react-router-dom'
import Client from './Client';
import Home from './Home';
import Vendor from './Vendor';
import Dashboard from './Dashboard';
import Error from './Error'
import SingleData from './SingleData';
import Login from './Login';
function MyRoute() {
  return (
    <div className='row'>
        <BrowserRouter>
        <div className="list-group col-1 d-grid">
          <ul className=''>
             {/* <li><Link className='btn btn-outline-primary gap-2 d-md-block' to="/">Dashboard</Link></li> 
             <li><Link className='btn btn-outline-primary gap-2 d-md-block' to="/client">Client</Link> </li>
              <li><Link className='btn btn-outline-primary gap-2 d-md-block' to="/vendor">Vendor</Link></li>
         */}
          </ul>    
          </div>          
          
         <div className='col-9 mt-5'>
         <Routes>
              <Route path="/dashboard"  element={<Dashboard/>} /> 
              <Route path="/"  element={<Login/>} />
              <Route path="/client" element={<Client/>}/>
              <Route path="/vendor" element={<Vendor/>}/>
              <Route path="/*" element={<Error/>}/>
              <Route path="/single/:eid" element={<SingleData  />}/>
         </Routes>
       
         </div>
         </BrowserRouter>

    </div>
  )
}

export default MyRoute
