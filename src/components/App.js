import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Carousel from './Carousel'
import Navbar from './Navbar'
import TopicContainer from './TopicContainer'
class App extends Component{
  render() {
    return(
    <MuiThemeProvider>
    <div>
    <Navbar />
    <hr/>
    <Carousel />
    <h1> Watfarer is...</h1>
    <TopicContainer />

    </div>
  </MuiThemeProvider>
    );
  }
}

export default App;
