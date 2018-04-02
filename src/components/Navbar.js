import React, {Component} from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import RaisedButton from 'material-ui/RaisedButton';
import './css/Navbar.css';
import SignIn from './SignIn';
import MyRoutes from '../config/routes.js'



class Navbar extends Component{
  render() {
    return(
    <nav>
      <div className = "NavLogo">
        <a><img src="http://via.placeholder.com/150x150"/></a>
      </div>
      <div>
        
        <h1><Link to="/">Website Tittle</Link></h1>
    </div>

    <div className= "NavCities">
      <h1> Cities Link Component</h1>
    </div>

    <div className = "NavAddCity">
      <h1> Add a city Component</h1>

    </div>

    <div className = "NavSearch">
      <h1> Search Bar</h1>
    </div>


      <div className = "NavSignIn">
        <ul>
          <li><Link to="/signin">Signin</Link></li>

          <li> Sign Out</li>
        </ul>
      </div>






  </nav>
    );
  }
}

export default Navbar;
