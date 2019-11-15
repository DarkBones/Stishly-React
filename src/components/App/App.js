import React, { Component } from 'react';
import '../../assets/css/App';
import Home from '../Home'
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentUser: null
    }
  }

  render() {
    return <Home />
  }
}

export default App;
