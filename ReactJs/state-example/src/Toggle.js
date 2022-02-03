import React,{Component} from 'react';

class Toggle extends Component
{
    constructor()
    {
        super();
        this.state={
          show:true,
          btnValue:"Hide"
        }
    }
    render(){
        return(

            <div>

                 <h1>Hello Toggle.</h1>
                 
                

               {
                 this.state.show?<h1>Hide or Show</h1>:null
               }     
          
             {/* <button onClick={this.setState({show:!this.state.show})}>Hide Or Show </button>
           */}
             <button onClick={()=>this.setState({show:!this.state.show})}>click</button>
                
            </div>
        );
      
    }
}


// function Toggle(){
//     return(
//         <div>
//         <h1>Hello Toggle.</h1>
//         <button onClick={alert("hello")}>Hide Or Show </button>
//         </div>
//     )
    
// }

export default Toggle;