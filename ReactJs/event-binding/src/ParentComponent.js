import React, { Component } from 'react'
import ChildComponent from './ChildComponent';

// communication child to parent in this section 

class ParentComponent extends Component {
       
    constructor(props) {
      super(props)
    
      this.state = {
         parentName:"Parent"
      }

      this.greetParent=this.greetParent.bind(this);
    
    }
    
    greetParent(chlildName)
    {
        alert(`Hello ${this.state.parentName} and ${chlildName}`);
    }
    
       
  render() {
    return (
      <div>
         <ChildComponent greetHandler={this.greetParent}/>
      </div>
    )

}
}

export default ParentComponent

