import React, { useState } from 'react'
import Child from './Child'

function Parent() {
    const [val,setValue]=useState();
    const onUpdate=(parentCount)=>{
      
       console.log("onUpdate In Parent :",parentCount)
       setValue(parentCount)
    }
  return (
    <div>
       <h1>Parent</h1>
       Count {val}
       <Child onUpdate={onUpdate}/>

    </div>
  )
}

export default Parent
