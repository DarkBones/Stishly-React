import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

function Inprivate(props) {
  if (props.authenticated) {
    return <Redirect to='/app' />;
  }

  return (
    <React.Fragment>
      {props.children}
    </React.Fragment>
  );
}

export default Inprivate;