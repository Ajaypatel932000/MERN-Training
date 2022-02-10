import React, { Component } from 'react';

class KeyEvent extends Component {
 
     constructor(props) {
       super(props)
     
    //    this.state = {
    //        fname:'',
    //        lname:''
          
    //    }
     }
     

    keyHandler=(e)=>{

        console.log("KeyDown ",e);
        console.log("Key : ",e.key,"   KeyCode : ",e.keyCode);
        let {name,value}=e.target;
        console.log(name)
        console.log("value :",e.key)
        // if(name==="fname")
        // {
        //     this.setState({fname:value})
        // }
        // if(name==="lname")
        // {
        //     this.setState({lname:value})
        // }

    }
    render() {
        return (
            <div>
                <hr/>
               First Name :
                 <input type="text" name="fnmae" onKeyDown={this.keyHandler} />
               {/* Last Name :
               <input type="text" name="lname" value={this.state.lname} onKeyDown={this.keyHandler} />
                */}


            </div>
        )
    }
}

export default KeyEvent;