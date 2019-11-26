import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import '../../assets/css/App';
import Home from '../Home';
import SignupForm from '../Auth/SignupForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import Authenticated from '../Auth/Authenticated';
import PrivateRoute from '../Route/PrivateRoute';
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
          <PrivateRoute path="/app" component={Application} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App;
