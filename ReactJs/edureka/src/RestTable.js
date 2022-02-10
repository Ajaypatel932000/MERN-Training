import React from 'react'

function RestTable(props) {
  return (
    <div>
               
                  {
                     props.empData.map((item,idx)=>{
                        return(
                            
                            <tr key={idx}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.salary}</td>
                            <td>{item.did}</td>
                        
                       </tr>

                         
                     )
                    })
                  }
                 
          
    </div>
  )
}

export default RestTable
