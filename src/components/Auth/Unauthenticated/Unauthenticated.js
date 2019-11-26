import React, { Component } from 'react';
import { getJwt } from '../../../helpers/jwt';
import axios from 'axios';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

class Unauthenticated extends Component {
  componentDidMount() {
    console.log("hello");
    const jwt = getJwt();

    if(jwt) {
      this.props.history.push("/app");
    }

    axios.get("http://localhost:3001/api/v1/user/get_user/", {
      headers: { Authorization: `Bearer ${jwt}`}
    })
    .then(this.props.history.push("/app"))
    .catch(error => {
      if(error.response && error.response.status === 401) {
        localStorage.removeItem("jwt-token");
      }
    });
  }

  render() {
    return (
      <div>
        <h1>Well...</h1>
        {this.props.children}
      </div>
    );
  }
}

Unauthenticated.propTypes = {
  history: PropTypes.object.isRequired,
}

export default withRouter(Unauthenticated);