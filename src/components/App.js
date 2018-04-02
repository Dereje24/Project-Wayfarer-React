import React, {Component} from 'react';
import { Switch, Route } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Carousel from './Carousel'
import Navbar from './Navbar'
import TopicContainer from '../containers/TopicContainer.js';
import MyRoutes from '../config/routes.js'

class App extends Component{
  render() {
    return(
    <MuiThemeProvider>

      <Navbar />

    <body>
        <Carousel />
        <h1> Watfarer is...</h1>
        <TopicContainer />
    </body>

    <footer>

    </footer>


  </MuiThemeProvider>
    );
  }
}

export default App;
