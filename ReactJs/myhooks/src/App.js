import logo from './logo.svg';
import './App.css';
import ClassCounter from './ClassCounter';
import FunctionalCounter from './FunctionalCounter';
import HookCounter from './HookCounter';
import ObjectHook from './ObjectHook';
import ArrayHook from './ArrayHook';
import HookCounterOne from './HookCounterOne';
import InsertAPI from './InsertAPI';

function App() {
  return (
    <div className="App">
             {/* <ClassCounter/> 
             <FunctionalCounter/>
             <HookCounter/>
             <ObjectHook/> */}
             <ArrayHook/>
             <HookCounterOne/>
             <InsertAPI/>

    </div>
  );
}

export default App;
