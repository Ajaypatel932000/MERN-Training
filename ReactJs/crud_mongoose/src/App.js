import './App.css';
import AddEmployee from './Components/AddEmployee';
import EditEmployee from './Components/EditEmployee';
import ListEmployee from './Components/ListEmployee';
import Header from './Header';
import Main from './Main';
function App() {
  return (
    <div className="App">
      {/* <Header/>

      <Main/> */}
      <AddEmployee/>
      <hr/>
      <ListEmployee/>
      {/* <EditEmployee/> */}

    </div>
  );
}

export default App;
