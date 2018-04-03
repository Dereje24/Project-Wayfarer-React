import React from 'react';
import { Switch, Route } from 'react-router-dom';
import App from '../App.js';
import SignIn from '../components/SignIn.js';

export default (
  <Switch>
    <Route exact path='/' component={ App }/>
    <Route path='/signin' component={ SignIn }/>
  </Switch>
)
