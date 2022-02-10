import React from 'react'
function ListMap() {
    const names=['Ajay','Vivek','Saloni']
    const person=[
        {
            id:1,
            name:"Ajay",
            age:30,
            skill:'React'
        },
        {
            id:2,
            name:"Vijay",
            age:20,
            skill:"Java"
        },
        {
            id:3,
            name:"Raj",
            age:44,
            skill:"JavaScript"
        }
    ]

   const PersonList=person.map((p,idx)=><h2 key={idx}><h1>I am {p.name}</h1><h1> I am  {p.age} old </h1>I know {p.skill}</h2>)
 

return (
    <div>
       {names.map((arg,idx)=><h2 key={idx}>{arg}</h2>)}

       <hr/>
        {/* {
            person.map((p,idx)=><h2 key={idx}><h1>I am {p.name}</h1><h1> I am  {p.age} old </h1>I know {p.skill}</h2>)
        } */}
        {PersonList}

    </div>
  )
}

export default ListMap
