import React,{Component} from 'react';

class Counter extends Component{
    constructor(props) {
      super(props)
    
      this.state = {
         count:0
      }
    }
    counterHandler=()=>{
        // let{count}=this.state;
        // count++;
        // this.setState(
        //     {count:count}
        //     ,()=>console.log("Callback :",count)
        //     )
        //     console.log(count);

        this.setState(
            {
                count:this.state.count+1
            },
            ()=>{// asynchronous communication
                console.log("Calllback ",this.state.count);
            }
        )
        // below synchronous statement
        console.log(this.state.count);
    }
    render(){
        return(
            <div>
                 Counter : {this.state.count}<br/>
                 <button onClick={this.counterHandler}>Increment</button>
            </div>
        )
    }
}

export default Counter;