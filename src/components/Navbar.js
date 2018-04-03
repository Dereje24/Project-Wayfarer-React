import React, {Component} from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import RaisedButton from 'material-ui/RaisedButton';
import './css/Navbar.css';
import SignIn from './SignIn';



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

      <div>
        <h1>Profile</h1>
      </div>

      <div className = "NavSignIn">
        <ul>
          <li><Link to="/signin">Sign In</Link></li>

          <li> Sign Out</li>
        </ul>
      </div>

  </nav>
    );
  }
}

export default Navbar;
