import React from 'react'
import About from './About'
import Home from './Home'
import Emp from './Emp'
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom'
function Routing() {
  return (
    <div>
         <h1>Routing Page</h1>
       
       <BrowserRouter>
                    
                
                <Routes>
                      <Route path='/' element={<Home />}/>
                      <Route path='about' element={<About/>}/>
                      <Route path='emp/:eid/:ename' element={<Emp/>}/>
                      

                </Routes>
       </BrowserRouter>
     

    </div>
  )
}

export default Routing
