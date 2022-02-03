import React,{Component} from "react";

class ClassClick extends Component
{
    constructor()
    {
        super()
    }
    myHandler()
    {
        console.log("This is Clicked Button")
    }
    render(){
        return(
            <div>
                 <button onClick={this.myHandler}>Click</button>
            </div>
        )

    }
}

export default ClassClick