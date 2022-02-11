import React from 'react'
import {Link,useParams} from 'react-router-dom';

function Emp() {
   const{eid,ename}=useParams();
  return (
    <div>
        <h2>Emp Page.</h2>
       <h2>Your Employee ID is {eid}</h2>
       <h2>Employee Name is : {ename}</h2>
    <nav>
    <Link to="/about">About</Link>
    <Link to="/">Home</Link>
 
   </nav>
    </div>

  )
}

export default Emp
