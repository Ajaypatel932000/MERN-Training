
import React,{Component} from 'react';

class InputField extends Component
{
    constructor()
    {
        super();
        this.state={fullname:'Ajay'}
    }
    onInputChange=(event)=>{
     
        let {fname,value}=event.target;
        console.log(fname," : ",value);
    }

    render()
    {
        return(
            <div>
               {/* <input type="text" name="fullname" value={fullname} onChange={this.onInputChange} /> */}
            </div>
        )

    }
}

export default InputField;