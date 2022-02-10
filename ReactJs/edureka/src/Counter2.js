import React,{Component} from 'react';

class Counter2 extends Component{
    constructor(props) {
      super(props)
    
      this.state = {
         count:0
      }
    }
    counterHandler=()=>{

        // this.setState(
        //     {
        //         count:this.state.count+1
        //     },
        //     ()=>{// asynchronous communication
        //         console.log("Calllback ",this.state.count);
        //     }
        // )

         // below synchronous statement
        
         this.setState((prevState)=>
           ({
              count:prevState.count+ 1
           })
           
         )

         console.log(this.state.count);


    }

    incrementFive()
    {
        this.counterHandler();
        this.counterHandler();
        this.counterHandler();
        this.counterHandler();
        this.counterHandler();
    }
    render(){
        return(
            <div>
                 Counter : {this.state.count}<br/>
                 <button onClick={()=>this.incrementFive()}>Increment</button>
            </div>
        )
    }
}

export default Counter2;