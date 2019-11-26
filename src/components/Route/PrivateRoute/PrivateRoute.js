import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { apiGet } from '../../../helpers/apiGet';

console.log(apiGet();
const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    true === true ?
      <Component {...props} />
      : <Redirect to='/' />
  )} />
)

export default PrivateRoute;