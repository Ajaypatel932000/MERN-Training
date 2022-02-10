import React from 'react';

// Two way destructure in function component 
//1. functional parameter destructring

// const Destructure=({name,color})=>{

//     // console.log(props)
//     return(
//         <div>
//             <h1>
//                 {/* Hello {props.name} and color is : {props.color} */}
//                 Your name is : {name } 
//                   <br/>
//                 Your Color is : {color}
//             </h1>
//         </div>
//     )
// }

const Destructure=(props)=>{
     const {name,color}=props;
    // console.log(props)
    return(
        <div>
            <h1>
                {/* Hello {props.name} and color is : {props.color} */}
                Your name is : {name } 
                  <br/>
                Your Color is : {color}
            </h1>
        </div>
    )
}
export default Destructure;