import React, { Component } from 'react'

class Dispaly extends Component {
    constructor(props) {
      super(props)
    
      
    }
    
  render() {
      let {name,pass}= this.props;
      console.log("name ", name);
    return (
      <div>
          {name.length>0 ? <span>Success</span>:null}
           
      </div>
    )
  }
}

export default Dispaly
