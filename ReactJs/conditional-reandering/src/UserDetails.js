import React,{Component} from 'react';

class UserDetails extends Component
{
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn:false
      }
    }

    
    
    
    render(){
        return(
            
            this.state.isLoggedIn?<div>Welcome Ajay</div>:<div>Welcome Guest</div>
        )


        // let message
        // if(this.state.isLoggedIn)
        //      message=<div>Welcome Ajay.</div>
        // else
        //      message=<div>Welcome Guest</div>

        //      return(
        //          <div>{message}</div>
        //      )

    //     if(this.state.isLoggedIn)
    // {
    //     return(
    //         <div>
    //             <h1>Hello Ajay!</h1>
    //         </div>
    //     )
        
    // }else
    // {
    //     return(
    //         <div>
    //             <h2>Hello Guest</h2>
    //         </div>
    //     )
    // }
        
    }
}

export default UserDetails;