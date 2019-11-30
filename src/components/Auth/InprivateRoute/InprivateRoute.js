import React from 'react';
import UserContext from '../../../contexts/user';
import { Route, Redirect } from 'react-router-dom';

const InprivateRoute = ({ component: Component, ...rest }) => (
  <UserContext.Consumer>
    {context => (
      <Route {...rest} render={(props) => (
        context.authenticated === false
          ? <Component {...props} />
          : <Redirect to='/app' />
      )} />
    )}
  </UserContext.Consumer>
);

export default InprivateRoute;