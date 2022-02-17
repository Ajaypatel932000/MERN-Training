import React from 'react'

function Child(props) {
    
 const  updateHandler=()=>{
    const count=1
     console.log("btn Clicked")
     props.onUpdate(count)

 }
  return (
    <div>
        <h1>Child</h1>
        <button onClick={updateHandler}>Click</button>
      
    </div>
  )
}

export default Child
