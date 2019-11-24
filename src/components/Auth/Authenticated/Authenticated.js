import React, { Component } from 'react';
import { getJwt } from '../../../helpers/jwt';
import axios from 'axios';

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
      this.context.history.push("/");
    }

    axios.get("http://localhost:3001/getUser/", {
      headers: { Authorization: `Bearer ${jwt}`}
    })
    .then(response => response.setState(
      {
        user: response.data
      }
    )).catch(error => {
      localStorage.removeItem("jwt-token");
      //this.context.history.push("/");
    })
  }

  render() {
    const { history } = this.props;

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

export default Authenticated;