import Profile from "./Profile";
import React from "react";
import Toggle from "./Toggle";
import Greet from "./Greet";

function App() {
  return (
    <div className="App">
      <Profile/>
      <Toggle/> 
      <Greet name="Ajay Greet" id="20"/>
    
    </div>
  );
}

export default App;
