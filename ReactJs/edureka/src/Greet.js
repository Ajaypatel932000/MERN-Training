import React from 'react';
import ChildGreet from './ChildGreet';

function Greet(props)
{

    console.log(props)
    return(
            <div>
                <h1>Hello {props.name}</h1>
                {props.children}
                <ChildGreet color={props.color} />
            </div>
    )
}

export default Greet;