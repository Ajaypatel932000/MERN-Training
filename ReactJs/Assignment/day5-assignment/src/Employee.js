import React, { Component } from 'react'

class Employee extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         person:[
            {
                name:"Rajvi",
                gender:"Female",
                salary:"4000"
            },
             {
                 name:"Ajay",
                 gender:"Male",
                 salary:"2000"
             },
             {
                name:"Jay",
                gender:"Male",
                salary:"50000"
            },
            {
                name:"Mansi",
                gender:"Female",
                salary:"2000"
            },
            {
                name:"Rahul",
                gender:"Male",
                salary:"7000"
            }
         ],
         tempData:[]
      }
    }
    componentDidMount()
    {
      let { person, tempData} = this.state;
      tempData=person;
      console.log("log ",person,tempData)
      this.setState({tempData})
        
    }
    handler=(Gender)=>{
      let{person,tempData}=this.state;

     let result=tempData.filter(item=>{
          if(Gender==="all")
          {
              return person
          }else
          {
          return item.gender===Gender
          } 
      })
      this.setState({person:result})
     }
    
  render() {
                         
    return (
      <div>
          <button className='btn btn-primary m-2' onClick={()=>this.handler('Male')}>Male</button>
          <button className='btn btn-primary m-2' onClick={()=>this.handler('Female')}>Female</button>
          <button className='btn btn-primary' onClick={()=>this.handler('all')}>All</button>
          
          
           <table  className="table table-striped">
               <thead>
                     <tr>
                         <td>Name</td>
                         <td>Gender</td>
                         <td>Salary</td>
                     </tr>

               </thead>
               <tbody>
                   {
                       this.state.person.map((item,idx)=>{
                           return(
                               <tr key={idx}>
                                      <td>{item.name}</td>
                                      <td>{item.gender}</td>
                                      <td>{item.salary}</td>
                               </tr>
                           )
                       })
                   }                    
               </tbody>
           </table>


      </div>
    )
  }
}

export default Employee
