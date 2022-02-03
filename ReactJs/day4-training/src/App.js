import logo from './logo.svg';
import './App.css';
import Display from './Display';
import ClickEvent from './ClickEvent';
import CheckBox from './CheckBox';
import InputField from './InputField';

function App() {
  const myval=50;
  return (
    <div className="App">
     {/* <Display title="Hello World" val={myval}/>

     <ClickEvent ></ClickEvent>
     <CheckBox/> */}

     <InputField />
    </div>
  );
}

export default App;
