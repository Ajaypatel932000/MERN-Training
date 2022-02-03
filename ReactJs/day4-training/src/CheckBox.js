import React,{Component} from 'react';

class CheckBox extends Component
{
    constructor()
    {
        super();
        this.state={checked:false}

    }
    change=()=>{
        this.setState({checked:!this.state.checked})
    }
    render(){
        // let {myState}=this.state.checked;

        return(
             <div>
                
                 Cricket : <input type="checkbox"  checked={this.state.checked}/>
                 <button onClick={this.change}>Toggle   </button>
             </div>
        )
    }
}

export default CheckBox;