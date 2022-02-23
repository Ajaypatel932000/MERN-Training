import React, { Component } from 'react'
import {Routes,Route} from 'react-router-dom';
// all component file
// insert here 

import AddEmployee from './Components/AddEmployee';
import EditEmployee from './Components/EditEmployee';
import ListEmployee from './Components/ListEmployee';



class Main extends Component {
  render() {
    return (
      <div>
           <main>
               <Routes>
                   <Route exact path="/" element={ListEmployee} />
                   <Route path="/list" element={ListEmployee}  />
                   <Route path="/addemployee" element={AddEmployee} />
                   <Route path="/editemployee/:id" element={EditEmployee} />
               </Routes>
           </main>
        
      </div>
    )
  }
}

export default Main
