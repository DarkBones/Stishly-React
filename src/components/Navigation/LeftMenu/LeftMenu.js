import React, { Component } from 'react';
import { getJwt } from '../../../helpers/jwt';
import axios from 'axios';

function LeftMenuSection(props) {
  return (
    <div className="section">
      <h4>{props.title}</h4>
      <div>
        {props.children}
      </div>
    </div>
  );
}

class Accounts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true
    }
  }

  componentDidMount() {
    const jwt = getJwt();

    axios.get("http://localhost:3001/api/v1/accounts/", {
      headers: { Authorization: `Bearer ${jwt}` }
    })
      .then(response => {
        console.log(response);
        this.setState({
          loading: false
        });
      })
      .catch(error => {
        // TODO: Handle error
        console.log("error: ", error);
      })
  }

  render() {
    if (this.state.loading) {
      return (
        <React.Fragment>
          {/* TODO: Use locales */}
          <p>Loading ...</p>
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <p>Placeholder</p>
        </React.Fragment>
      );
    }
  }
}

class LeftMenu extends Component {

  render() {
    return (
      <div className="container container-content">
        <LeftMenuSection title="ACCOUNTS">
          <Accounts />
        </LeftMenuSection>
      </div>
    );
  }
}

export default LeftMenu;