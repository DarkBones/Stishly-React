import React, { Component } from 'react';
import UserContext from '../../../contexts/user';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <UserContext.Consumer>
    {context => (
      <Route {...rest} render={(props) => (
        context.authenticated === true
          ? <Component {...props} />
          : <Redirect to='/' />
      )} />
    )}
  </UserContext.Consumer>
);

export default PrivateRoute;