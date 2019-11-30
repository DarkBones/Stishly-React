import React from 'react';
import { Redirect, Route } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    true === true ?
      <Component {...props} />
      : <Redirect to='/' />
  )} />
)

export default PrivateRoute;