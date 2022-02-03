import React,{Component} from 'react';

class Welcome extends Component
{
    constructor()
    {
        super()

    }
  
    
    render(){
      return (
          <div>
               <h1>Class Component</h1>
                 <h1>My name is {this.props.name}</h1>
     
          </div>
      );

    }
}

export default Welcome;