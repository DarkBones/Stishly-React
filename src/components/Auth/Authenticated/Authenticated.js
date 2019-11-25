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