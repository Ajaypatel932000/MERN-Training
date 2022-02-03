import React,{Component} from 'react';

class Employee extends Component{

    constructor(){
        super();
        this.state={
                     Employees:[
                                 {id:1,name:"Ajay"},
                                 {id:2,name:"Jay"},
                                 {id:3,name:"Parth"}
                               ]
                   }
    }
    render(){
        return(
            <div>
                
                  {this.state.Employees[0].name}
            </div>
        )
    }
}
export default Employee;