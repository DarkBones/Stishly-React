import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

function Private(props) {
  if (!props.authenticated) {
    return <Redirect to='/' />;
  }

  return (
    <React.Fragment>
      {props.children}
    </React.Fragment>
  );
}

export default Private;