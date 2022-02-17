import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Login from './Login';
import MyRoute from './MyRoute';
function App() {
  return (
    <div className="App">
            {/* <BrowserRouter> */}
                  <MyRoute/>
             {/* <Login/> */}
             {/* </BrowserRouter> */}

    </div>
  );
}

export default App;
