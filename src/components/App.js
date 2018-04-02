import React, {Component} from 'react';
import Carousel from './Carousel'
import Navbar from './Navbar'
import TopicContainer from './TopicContainer'
class App extends Component{
  render() {
    return(
    <div>
    <Navbar />
    <hr/>
    <Carousel />
    <h1> Watfarer is...</h1>
    <TopicContainer />

    </div>
    );
  }
}

export default App;
