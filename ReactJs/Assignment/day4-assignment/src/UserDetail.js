import React,{Component} from "react";

const UserDetail=(props)=>{
    const {name,val}=props;
    return(
        <div>
            <h1>UserDetails Page.</h1>
            Name : {props.name}
            <br/>
           Role  :  {props.role}

        </div>
    )
}
export default UserDetail;