import React,{useState} from 'react'

function ObjectHook() {
    const [name,setName]=useState({firstName:'',lastName:''})
  return (
    <div>
       <form>
           <input type="text" value={name.firstName}
             onClick={e=>setName({...name,firstName:e.target.value})
            }  /><br/>
           <input type="text" value={name.lastName}  
            onClick={e=>setName({...name,lastName:e.target.value})} 
            />
           <h1>Your First Name is : {name.firstName}</h1>
           <h2>Your Last Name is : {name.lastName}</h2>
           <h2>{JSON.stringify(name)}</h2>
       </form>
    </div>
  )
}

export default ObjectHook
