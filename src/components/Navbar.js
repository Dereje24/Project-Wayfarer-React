import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import './css/Navbar.css';

class Navbar extends Component{
  render() {
    return(
    <nav>
      <div className = "NavLogo">
        <a href="https://placeholder.com"><img src="http://via.placeholder.com/150x150"/></a>
      </div>
      <div>
        <h1>Website Tittle</h1>
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
          <li> Sign In</li>
          <li> Sign Out</li>
        </ul>
      </div>






  </nav>
    );
  }
}

export default Navbar;
