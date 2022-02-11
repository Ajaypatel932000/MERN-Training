import React,{useState,useEffect} from 'react'


function HookCounterOne() {
  const[count,setCount]=useState(0);
  const[name,setName]=useState('');
   // every time called after render method
  // useEffect(()=>{
  //   document.title=`You Clicked  ${count}`;
  //   console.log("useEffect Method");
  // })
  
  // here below counter will change then useEffect called condition update
  useEffect(()=>{
    document.title=`You Clicked  ${count}`;
    console.log("useEffect Method");
  },[count])
  //[name]

  return (
    <div>
      {console.log("render called")}
        <button onClick={()=>setCount(count+1)}>Click {count}</button>
        <input type='text' value={name} onChange={e=>setName(e.target.value)} />
      
    </div>
  )
}

export default HookCounterOne
