import React,{Component} from 'react';
import axios from 'axios';
class EmployeeService {
  deleteEmployee(id)
  {
      axios.get('http://localhost:8181/employees/deleteEmployee/'+ id).then(
          ()=>{
              console.log("Employee Deleted..");
          }
      ).catch(err=>{
          console.log("Error "+err);
      })
  }
}
export default EmployeeService;