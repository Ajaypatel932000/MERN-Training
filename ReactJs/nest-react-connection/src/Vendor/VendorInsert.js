import axios from 'axios';
import React, { useState } from 'react'

const VendorInsert = () => {

    const [name,setName]=useState();
    const [number,setNumber]=useState();
    const [add,setAdd]=useState();
    const onSubmit=(event)=>{
        event.preventDefault();

        const vendor={name:name,phone:number,add:add};
       axios.post("http://localhost:3001/vendor",vendor).then(
           res=>{
               console.log(res);
               setName('');
               setAdd('');
               setNumber('');

           }
       ).catch(err=>{
           console.log(err);
       })
    }
  return (
    <div>
        <form>
            <div className='form-group'>
            <label>Vendor Name</label>
            <input type="text"  className='form-control' value={name} onChange={(e)=>setName(e.target.value)}/>
            </div>
            <div className='form-group'>
            <label>Vendor Phone</label>
            <input type="number"   className='form-control' value={number} onChange={(e)=>setNumber(e.target.value)} />
            </div>
            <div className='form-group'>
            <label>Vendor Address</label>
            <input type="text" className='form-control' value={add} onChange={(e)=>setAdd(e.target.value)}/>
            </div>
            <div className='form-group'>
            <button type="submit" className='btn btn-primary' onClick={onSubmit}>Submit</button>
            </div>
        </form>
      
    </div>
  )
}

export default VendorInsert
