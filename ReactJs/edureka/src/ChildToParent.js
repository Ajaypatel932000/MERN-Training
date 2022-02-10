import React from 'react'

function ChildToParent(props) {

  return (
     <div>
          {/*  here we can only call the method 
          <button className='btn btn-danger' onClick={props.greetHandler}>Greet Parent</button> */}
           {/* below code can pass the  parameter to parent*/}
          <button className='btn btn-danger' onClick={()=>props.greetHandler('Child')}>Greet Parent</button>

    </div>
  )
}

export default ChildToParent
  