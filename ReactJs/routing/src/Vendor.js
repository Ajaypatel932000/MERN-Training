import React from 'react'
import ReactTable from "react-table";  

function Vendor() {
    const empData = [{   name: 'Ayaan',   age: 26  },
                  {  name: 'Ahana',   age: 22  },
                  {  name: 'Peter',  age: 40   },
                  {  name: 'Virat',  age: 30   },
                  {  name: 'Rohit',  age: 32  },
                  {    name: 'Dhoni',  age: 37  }
                ]
             
  return (
    <div>
        <h1>Vendor Component</h1>
        <table className='table table-striped'>
              <thead>
                   <tr>
                       <td>Name</td>
                       <td>Age</td>
                   </tr>
              </thead>
              <tbody>
                  {
                      empData.map((item,idx)=>{
                          return(
                            <tr key={idx}>
                            <td>{item.name}</td>
                            <td>{item.age}</td>
                            
                        </tr>

                          )
                      })

                  }
              </tbody>

          </table>
     
      
    </div>
  )
}

export default Vendor
