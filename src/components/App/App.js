import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import '../../assets/css/App';
import Home from '../Home';
import SignupForm from '../Auth/SignupForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import Authenticated from '../Auth/Authenticated';
import Application from '../Application';

import history from "../../history";

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentUser: null
    }
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/signup" component={SignupForm} />
          <Authenticated history={history}>
            <Route path="/app" component={Application} />
          </Authenticated>
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App;
