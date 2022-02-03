import React from 'react';


const Hello=(props)=>{
    console.log(props);
    return(
        <div>
            <h2>JSX Demo Example : {props.name} and type is : {props.type} </h2>
            {props.children}

        </div>
    );
    // below code with out using JSX
//    // return React.createElement("div",null,'<h1> Hello With out JSX <h1>');
//    return React.createElement("div",null,React.createElement("h1",{id:"myId",className:"dummyCls"},' Hello With out JSX '));

}

export default Hello;