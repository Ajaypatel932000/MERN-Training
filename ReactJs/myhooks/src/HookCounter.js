import React,{useState} from 'react'

function HookCounter() {
    const intialCount=0;
    const [count,setCount]=useState(intialCount);

    const incrementFive=()=>{
        for(let i=0;i<5;i++)
        {
            setCount(pre=>pre+1);
        }
    }
    return (
        <div>
              Count :{count}<br/>
              <button onClick={()=>setCount(intialCount)}>Reset</button><br/>
              <button onClick={()=>setCount(count+1)}>Increment</button><br/>
              <button onClick={()=>setCount(count-1)}>Decrement</button><br/>
              <button onClick={()=>setCount(count+5)}>Increment Five</button><br/>
              <button onClick={incrementFive}>Increment Five MyFun</button><br/>



        </div>
    )
}

export default HookCounter
