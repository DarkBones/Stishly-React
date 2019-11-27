import React, { Component } from 'react';
import { getJwt } from '../../../helpers/jwt';
import axios from 'axios';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { translate } from 'react-i18next';


class Authenticated extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: undefined
    };
  }

  componentDidMount() {
    const jwt = getJwt();

    if (!jwt) {
      this.props.history.push("/");
      // TODO: Display message saying you need to log in
    }

    axios.get("http://localhost:3001/api/v1/user/get_user/", {
      headers: { Authorization: `Bearer ${jwt}` }
    })
      .then(response => this.setState(
        {
          user: response.data
        }
      )).catch(error => {
        if (error.response && error.response.status === 401) {
          localStorage.removeItem("jwt-token");
          this.props.history.push("/");
        } else {
          // TODO: Display message saying there was an unexpected error
        }
      });
  }

  render() {
    const { t } = this.props;

    if (this.state.user === undefined) {
      return (
        <div>
          {/* TODO: Make this look better */}
          <h1>{t('auth.authenticated.loading')} ...</h1>
        </div>
      )
    }

    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

Authenticated.propTypes = {
  history: PropTypes.object.isRequired,
  children: PropTypes.object.isRequired
}

export default withRouter(translate()(Authenticated));