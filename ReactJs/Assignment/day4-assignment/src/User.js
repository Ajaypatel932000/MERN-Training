import React,{Component} from "react";
import UserDetail from "./UserDetail";

const User=(props)=>{
    const {name,val}=props;
    return(
        <div>
            {/* Name : {name}
               <br/>
            Role :{val}
             */}
            Name : {props.name}
            <br/>
           Role  :  {props.role}

           <UserDetail name={props.name} role={props.role} />
        </div>
    )
}


// class User extends Component
// {
//     constructor()
//     {
//         super();

//     }

//    render(){
//      const {name,val}=this.props;
//        return(
//             <div> 
//                 Name : {name}
//                  <br/>
//                 value : {val}

                 
//             </div>
//        )
//    }

// }

export default User;