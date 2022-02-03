import React from 'react';
import Employee from './Employee';
import Emp from './Emp';
import User from './User';
function App() {
  return (
    <div className="App">
    
        <Employee></Employee>
        <Emp/>
        <User name="userRole" role="Admin"  />

        </div>
  );
}

export default App;
