import React from 'react';

class Profile extends React.Component
{
    constructor()
    {
        super();
        this.state={
            name:"Ajay",
            no:20,
            count:0
        }
    }
    changeMessage()
    {
        // this.setState({
        //     name:"hello Ajay",
        //     count:this.state.count+1
        // },()=>{console.log("Count :",this.state.count)})
        // console.log("function :",this.state.count);

        this.setState((prevState,props)=>({
            count:prevState.count+1
        }),()=>console.log("Count :",this.state.count))
        console.log("  : ",this.state.count) 
        
    }
    
    incrementFive()
    {
        this.changeMessage();
        this.changeMessage();
        this.changeMessage();
        this.changeMessage();
        this.changeMessage();
    }

    render(){
        console.log("render");
        return(
           <div>
               <h1>Your Name is :{this.state.name}</h1>
               <h2>Your Number is :{this.state.no}</h2>
               <h2>No of times you onClicked : {this.state.count}</h2>
               {/* <button onClick={()=>{this.changeMessage()}}>Change</button> */}
               <button onClick={()=>{this.incrementFive()}}>Change</button>

           </div>
        )
    }
}

export default Profile