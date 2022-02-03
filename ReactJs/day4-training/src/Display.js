import React,{Component} from 'react';

class Display extends Component
{
     constructor(props)
     {
         super();
     //    console.log("props obj :",props);
       let {title}= props;
       console.log("title : ",title);
     }
     render(){
         let {title,val}=this.props;
         return(
           <div>
                <h1>Display Page.</h1>
         <h2>title is : {title}</h2>
         <h3>Value is : {val}</h3>
           </div>
         )
    }
}

export default Display;