import React, {Component} from 'react';
import { Switch, Route } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Carousel from './components/Carousel'
import Header from './components/Header.js'
import TopicContainer from './containers/TopicContainer.js';
import axios from 'axios';
import SignIn from './components/SignIn.js'


class App extends Component{

  constructor() {
      super();
      this.state = {
          isAuthenticated: false,
          isAuthorized: false
      };
      this.authenticate = this.authenticate.bind(this);
  }

  authorize() {
        // Sends a request for authorization ...
        // Test it. Switch between true and false
        return false
        // You can use this for site permissions!
    }


  authenticate(formData) {
        // SAMPLE ONLY -- You should insert the logic for your unique app here to request authentication!
        let url = 'http://localhost:3000/login';
        console.log("User " + JSON.stringify(formData))
        let user = JSON.stringify(formData)
        axios.post(url, user)
            .then((res) => {
                console.log(res);
                // let authenticated = res.user ? true : false;
                // this.setState({ isAuthenticated: authenticated })
            })
            .catch((err) => { console.err(err); })
        // Testing only. In prod we would let the request above update the state
        // this.setState({ isAuthenticated: true, isAuthorized:true })
    }

  render() {
    return(
    <div>
        <Header />

          <Carousel />
          <h1> Wayfarer is...</h1>
          <TopicContainer />
      <Switch>
        <Route path='/signin' render={ () => <SignIn authenticate={ this.authenticate } /> } />
      </Switch>
  </div>
    );
  }
}

export default App;
