import React, { Component } from 'react';
import { getJwt } from '../../../helpers/jwt';
import axios from 'axios';
import PropTypes from 'prop-types';

class Authenticated extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: undefined
    }
  }

  componentDidMount() {
    const jwt = getJwt();
    
    if(!jwt) {
      this.props.history.push("/");
    }

    axios.get("http://localhost:3001/api/v1/user/get_user/", {
      headers: { Authorization: `Bearer ${jwt}`}
    })
    .then(response => this.setState(
      {
        user: response.data
      }
    )).catch(error => {
      console.log(error);
      //localStorage.removeItem("jwt-token");
      this.props.history.push("/");
    });
  }

  render() {
    console.log(typeof(this.props.children));

    if(this.state.user === undefined) {
      return (
        <div>
          <h1>Loading...</h1>
        </div>
      )
    }

    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}

Authenticated.propTypes = {
  history: PropTypes.object,
  children: PropTypes.object
}

export default Authenticated;