import React, { Component } from 'react'

 class ClassDestructure extends Component {
  render() {
      const{name,color}=this.props;
    return (
      <div> 
          <hr/>
           <h1> Your name is : {name}</h1>
           <h2>Your Color is : {color}</h2>
        
      </div>
    )
  }
}

export default ClassDestructure
