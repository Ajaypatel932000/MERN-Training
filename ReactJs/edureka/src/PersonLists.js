import { tab } from '@testing-library/user-event/dist/tab';
import React, { Component } from 'react'

export class PersonLists extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
          id:'',
          nm:'',
          skill:'',
        persons:[
            {
                id:1,
                name:"Ajay",
                skill:"Java"
            },
            {
                id:2,
                name:"Jay",
                skill:"JavaScript"
            },
            {
                id:3,
                name:"Vjay",
                skill:"React"
            },
            {
                id:4,
                name:"Mansi",
                skill:"Node"
            },
            {
                id:5,
                name:"Shweta",
                skill:"Express"
            }
        ]
         
      }
     // this.clickHandler=this.clickHandler.bind(this);
    }
    clickHandler=(e)=>
    {
        e.preventDefault();    
        let {persons}=this.state;
        persons.push(
            {
                id:this.state.id,
                name:this.state.nm,
                skill:this.state.skill
            }
        )
        this.setState({persons:persons})
        

    }
    handleChange=(event)=>{
      let{name,value}=event.target;
      let{id,nm,skill}=this.state;
       console.log("name :",name,"value :",value);
     //  console.log(event.target.value);
       if(name==="id")
       {
          this.setState({id:value})
       //   this.state.id=value;
       }
       if(name==="nm")
       {
           this.setState({nm:value})
           //this.state.name=name;
       }
       if(name==="skill")
       {
           this.setState({skill:value})
          // this.state.skill=value;
       }
       console.log("name :",this.state.id,"value :",this.state.name);

    }
    
  render(){

    
  return (
    <div>
         {

             <table className='table table-striped'>
                 <thead>
                     <tr>
                         <th>Id</th>
                         <th>Name</th>
                         <th>Skill</th>
                     </tr>
                     </thead>
                     <tbody>
                         {
                             this.state.persons.map((item,idx)=>{
                                 return(
                                     <tr key={idx}>
                                         <td>{item.id}</td>
                                         <td>{item.name}</td>
                                         <td>{item.skill}</td>
                                     </tr>
                                 )
                             })

                         }
                     </tbody>
                

             </table>
         }
        <form onSubmit={this.clickHandler}>
            Id :   <input type="text" className='form-control' name="id" onChange={this.handleChange.bind(this)} />
            Name : <input type="text" className="form-control" name="nm" onChange={this.handleChange.bind(this)}/>
            Skill : <input type="text" className="form-control" name="skill" onChange={this.handleChange.bind(this)}/>

            <button className="btn btn-primary">Add</button>
        </form>

    </div>
  
  )
}
}
export default PersonLists;

