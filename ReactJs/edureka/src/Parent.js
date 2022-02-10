import React, { Component } from 'react'
import ChildToParent from './ChildToParent';

class Parent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         parentName:"Parent "
      }
      this.greetParent=this.greetParent.bind(this);
    }

    greetParent(childName)
    {
        alert(`Hello ${this.state.parentName} from ${childName}`);
    }
    
    render() {
        return (
            <div>

              <ChildToParent greetHandler={this.greetParent}/>

            </div>
        )
    }
}

export default Parent
