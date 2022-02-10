import React, { Component } from 'react'

class ClassClick extends Component {
    clickHandler()
    {
       console.log("Clicked Fire")
    }
    render() {
        return (
            <div>
               <button onClick={this.clickHandler} className="btn btn-secondary">Click</button>
            </div>
        )
    }
}

export default ClassClick
