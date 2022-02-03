import logo from './logo.svg';
import './App.css';
import Welcome from './welcome';
import Hello from './Hello';
import Message from './Message';

function App() {
  return (
    <div className="App">

      <Welcome name="Mansi" type="Class Component"  />
      <Hello name="Ajay" type="A">
        <p>This is paragraph. Additional Component</p>

      </Hello>
      <Hello name="Vijay" type="B"/>
      <Hello name="Rahul" type="C"/>
      <Message name="Message Component"/>
    </div>
  );
}

export default App;

