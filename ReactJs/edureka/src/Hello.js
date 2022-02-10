import React from 'react';

const Hello=()=>{
    // return (
    //     <div>
    //         <h1>Hello Ajay.</h1>
    //     </div>
    // )

    //return React.createElement('div',null,'Hello React');
    return React.createElement('div',{id:'hello',className:"dummy"},React.createElement('h1',null,'Hello React'));

}
export default Hello;
