import React from "react";
import { BrowserRouter, Switch } from 'react-router-dom';
import PrivateRoute from '../Auth/PrivateRoute';
import InprivateRoute from "../Auth/InprivateRoute";
import Home from '../Home';
import SignupForm from '../Auth/SignupForm';

const Routes = () => {
  return (
    <div className="container container-content">
      <BrowserRouter>
        <Switch>
          {/* Inprivate Routes */}
          <InprivateRoute exact path="/" component={Home} />
          <InprivateRoute path="/signup" component={SignupForm} />
          {/* Private Routes */}
          <PrivateRoute exact path="/app" component={SignupForm} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default Routes;
