import React from 'react'
import {Link} from 'react-router-dom'
function Dashboard() {
  return (
    <div>
       <h1>Dashboard Component</h1>
       <div className="list-group col-1 d-grid">
          <ul className=''>
             <li><Link className='btn btn-outline-primary gap-2 d-md-block' to="/dashboard">Dashboard</Link></li> 
             <li><Link className='btn btn-outline-primary gap-2 d-md-block' to="/client">Client</Link> </li>
              <li><Link className='btn btn-outline-primary gap-2 d-md-block' to="/vendor">Vendor</Link></li>
        
          </ul>    
          </div>          
     
       <Link to="/" className='btn btn-outline-primary '>Logout</Link>


    </div>
  )
}

export default Dashboard
