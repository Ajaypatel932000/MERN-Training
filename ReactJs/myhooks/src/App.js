import logo from './logo.svg';
import './App.css';
import ClassCounter from './ClassCounter';
import FunctionalCounter from './FunctionalCounter';
import HookCounter from './HookCounter';
import ObjectHook from './ObjectHook';
import ArrayHook from './ArrayHook';
import HookCounterOne from './HookCounterOne';
import InsertAPI from './InsertAPI';
import ListEmployee from './ListEmployee';
import MyRoute from './MyRoute';
import MyRoute2 from './MyRoute2';
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import Dahshboard from './Dahshboard';
import { Home } from './Dahshboard';
import { About } from './Dahshboard';
function App() {
  return (
    <div className="App">
             {/* <ClassCounter/> 
             <FunctionalCounter/>
             <HookCounter/>
             <ObjectHook/> */}
             {/* <ArrayHook/>
             <HookCounterOne/> */}
              {/* <InsertAPI/> */}

             {/* <ListEmployee/>
             */}
             <MyRoute/> 
           
    </div>
  );
}

export default App;
