import React from 'react'
// rfc
// rfce

function FunctionClick() {

    function clickHandler()
    {
        console.log("Button Clicked ")
    }
  return (
    <div>
         {/* don't put paranthises here */}
        <button onClick={clickHandler}>Click Here</button>
    </div>
  )
}

export default FunctionClick

