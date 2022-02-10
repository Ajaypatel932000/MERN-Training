import React, { useState } from 'react'

function Test() {

    const data=[
        {
            id:1,
            name:"Ajay",
            regioun:"East",
            classCode:'bg-primary',
            selected:false
        },
        {
            id:2,
            name:"Jay",
            regioun:"West",
            classCode:'bg-success',
            selected:false
        },
        {
            id:3,
            name:"Ajay",
            regioun:"East",
            classCode:'bg-primary',
            selected:false

        },
        {
            id:4,
            name:"Mansi",
            regioun:"South",
            classCode:'bg-danger',
            selected:false
        }


    ]
    const [client,setClient]=useState(data);

   const onRowSelect=(rowIndex)=>  {
    //    data[rowIndex].
    client[rowIndex].selected=!client[rowIndex].selected;
    console.log(client);
    setClient([...client])


   }

  return (
    <div>
       <table className='table table-striped'>
           <tbody>
               <tr>
                   <th>Id</th>
                   <th>Name</th>
                   <th>Region</th>
                   <th>Color</th>
               </tr>
               {
                   client.map((item,idx)=>{
                       return(
                           <tr key={idx} className={item.selected?'bg-primary':null }>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                {/* <td className={item.classCode}>{item.regioun}</td> */}
                                <td>
                                  {/* {
                                    item.regioun==='East'?<span className='bg-primary'>{item.regioun}</span>:null */}
                                  {item.regioun==='East' && <span className='bg-primary'>{item.regioun}</span>}
                                  {item.regioun==='South' && <span className='bg-success'>{item.regioun}</span>}
                                  {item.regioun==='West' && <span className='bg-secondary'>{item.regioun}</span>}
                                </td>
                                <td className='btn btn-info' onClick={()=>onRowSelect(idx)}>Select</td>
                           </tr>
                       )
                   })
               }
           </tbody>

       </table>
    </div>
  )
}

export default Test
