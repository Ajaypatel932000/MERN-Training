import React from 'react'
import './myStyle.css'

function Stylesheet(props) {
  let className=props.primary?'primary':''
  return (
    <div>
        <h1 className={className}>stylesheet</h1>
        <h1 className={`${className} font-xl`}>Multiple Property</h1>

      
    </div>
  )
}

export default Stylesheet;
