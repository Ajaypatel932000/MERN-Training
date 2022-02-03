import React,{Component} from 'react';

class Emp extends Component
{
    constructor()
    {
        super()
        this.state={
            empId:1,
            empName:"ABC",
            empSalary:"20000"
        }

    }
    render()
    {
        //   let {id}=this.state.empId;
        return(
            <div>
                <hr/>
                <h3>ID : {this.state.empId}</h3>
                <h3>Name : {this.state.empName}</h3>
                <h3>Salary : {this.state.empSalary}</h3>
             {/* id:   {id} */}
                
            </div>
        )
    }
}

export default Emp;
