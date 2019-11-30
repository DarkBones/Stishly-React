import React, { Component } from 'react';
import { getJwt } from '../../../helpers/jwt';
import axios from 'axios';
import { translate } from 'react-i18next';

class Authenticated extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true
    };
  }

  componentDidMount() {
    const jwt = getJwt();

    if (!jwt) {
      this.setState({
        loading: false
      })
      this.props.setAuthenticated(false);
      return;
    }

    axios.get("http://localhost:3001/api/v1/user/get_user/", {
      headers: { Authorization: `Bearer ${jwt}` }
    })
      .then(() => {
        this.props.setAuthenticated(true);
        this.setState({
          loading: false
        });
      })
      .catch(error => {
        if (error.response && error.response.status === 401) {
          localStorage.removeItem("jwt-token");
        } else {
          // TODO: Return message saying there was an unexpected error
        }
        this.setState({
          loading: false
        });
        this.props.setAuthenticated(false);
      });
  }

  render() {
    const { t } = this.props;

    if (this.state.loading) {
      return (
        <React.Fragment>
          {/* {TODO: Make this look better} */}
          <h1>{t('auth.authenticated.loading')} ...</h1>
        </React.Fragment>
      )
    }

    return (
      <React.Fragment>
        {this.props.children}
      </React.Fragment>
    )
  }

}

export default translate()(Authenticated);