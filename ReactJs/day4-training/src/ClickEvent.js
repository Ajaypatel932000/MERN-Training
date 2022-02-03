import React,{Component} from 'react';

class ClickEvent extends Component
{
    constructor(props)
    {
        super();
        this.state={text:"Hello Ajay"}
    }
    onChange=()=>{
        this.setState({text:"Done"})
    }

    onClear=()=>{
        this.setState({text:''})
    }
    render(){

        return(
            <div>
                <h1>State Example </h1>
                <hr/>
                <h2>{this.state.text}</h2>
                <button onClick={this.onChange}>Change</button>
                <button onClick={this.onClear}>Clear</button>

            </div>
        )

    }
}

export default ClickEvent;