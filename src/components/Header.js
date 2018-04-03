import React, {Component} from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import Navbar from './Navbar.js';

class Header extends Component{
// logic of logged in
  render() {
    return(
      <Navbar />
    );
  }
}

export default Header;
