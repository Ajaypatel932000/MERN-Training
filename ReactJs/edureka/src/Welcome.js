import React,{Component} from 'react';

class Welcome extends Component
{
    render(){
        return(
            <div>
                <h2>Welcome Class Component .</h2>
                <hr/>

                <h3>Property available using this keyword</h3>
                <h3>{this.props.name}</h3>
                <h4>{this.props.color}</h4>
                <hr/>
            </div>
        )
    }
}

export default Welcome;