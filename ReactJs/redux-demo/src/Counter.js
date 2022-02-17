import React,{useState} from 'react'
import store from './store/sotre';
import Increasecounter from './action/Increasecounter';
import Decreasecounter from './action/Decreasecounter';

function Counter() {
    const[count,setCount]=useState(1);
    const onIncreaseCounter=()=>{
        

        console.log(" Counter Component Called");

        store.dispatch(Increasecounter(count));

    }
    const onDecreaseCounter=()=>{
        

        console.log(" Counter DEc Component Called");

        store.dispatch(Decreasecounter(count));

    }
  
    const onShowCounter=()=>{
        let result=store.getState();
        let cnt=result.counterValue;
        cnt++;
         let dec=result.decValue;
         dec--;
        console.log(result);
        console.log("Increase ",cnt," Decrease ",dec);
        console.log(typeof(result.counterValue));
        console.log(cnt);

    }
  return (
    <div>
         <h1>Counter Component</h1>
         <button onClick={onIncreaseCounter}>Increase Counter</button>
         <button onClick={onShowCounter}>Show Counter</button>
         <button onClick={onDecreaseCounter}>Increase Counter</button>


    </div>
  )
}

export default Counter
