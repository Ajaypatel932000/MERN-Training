import {BrowserRouter,Route,Routes,Link} from 'react-router-dom'
import React from 'react'
import Login from './Login'
import Success from './Success'

function MyRoute() {
  return (
    <div>
      <h1>Heloo</h1>
      
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Login />}  />
            <Route path="/success" element={<Success/>}/>
        </Routes>
      
      
          </BrowserRouter> 
     
    </div>
  )
}

export default MyRoute
