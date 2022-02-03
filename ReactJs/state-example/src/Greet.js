import React from 'react';
 cd 
// const Greet=({name,id})=>{
//     return(
//         <div>
//             <h1>Name is :{name} <br></br> and id is :{id} </h1>
//         </div>
//     )
// }


const Greet=props=>{
    const {name,id}=props

    return(

        <div>
            <h1>Name is :{name} and id is : {id} </h1>
        </div>
    )
}

export default Greet;