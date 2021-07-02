import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Mainpage from './Component/Navigation/Mainpage';
import './Component/Route/Route'
import Navbar from './Component/Navigation/Navbar';
import Signin from './Component/Signin/Signin';
import { Route, BrowserRouter as Router, Link, Switch } from 'react-router-dom'
import { Nav } from 'react-bootstrap';
import Midenavbar from './Component/Navigation/Midenavbar';
import Subscribe from './Component/Down/Subscribe';
import Last from './Component/Down/Last';
function App() {
  return (
    <div className="App">
 
      <Navbar></Navbar>
      <Subscribe />
            
            <Last />
    </div>
  );
}

export default App;
