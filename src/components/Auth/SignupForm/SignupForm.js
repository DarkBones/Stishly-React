import React, { Component } from 'react';
import axios from 'axios';
import { translate } from 'react-i18next';

class SignupForm extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      password_confirmation: "",
      timezone: "",
    }
  }

  handleSubmit(event) {
    const {
      first_name,
      last_name,
      email,
      password,
      password_confirmation,
    } = this.state;

    event.preventDefault();
    axios.post("http://localhost:3001/signup",
      {
        user: {
          first_name: first_name,
          last_name: last_name,
          email: email,
          password: password,
          password_confirmation: password_confirmation,
        }
      })
      .then(response => {
        console.log("Success: " + JSON.stringify(response));
      }).catch(error => {
        console.log("Failure: " + JSON.stringify(error));
      })

  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  render() {
    const { t } = this.props;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>

          <div className="row">
            <div className="col-12 col-sm-6 py-2">
              <label>{t('auth.signupform.firstname.label')}</label>
              <input
                className="form-control"
                type="text"
                name="first_name"
                placeholder={t('auth.signupform.firstname.placeholder')}
                value={this.state.first_name}
                onChange={this.handleChange}
                required
              />
            </div>

            <div className="col-12 col-sm-6 py-2">
              <label>{t('auth.signupform.lastname.label')}</label>
              <input
                className="form-control"
                type="text"
                name="last_name"
                placeholder={t('auth.signupform.lastname.placeholder')}
                value={this.state.last_name}
                onChange={this.handleChange}
                required
              />
            </div>
          </div>

          <div className="row">
            <div className="col-12 py-2">
              <label>{t('auth.signupform.email.label')}</label>
              <input
                className="form-control"
                type="email"
                name="email"
                placeholder={t('auth.signupform.email.placeholder')}
                value={this.state.email}
                onChange={this.handleChange}
                required
              />
            </div>
          </div>

          <div className="row">
            <div className="col-12 py-2">
              <label>{t('auth.signupform.password.label')}</label>
              <input
                className="form-control"
                type="password"
                name="password"
                placeholder={t('auth.signupform.password.placeholder')}
                value={this.state.password}
                onChange={this.handleChange}
                required
              />
            </div>
          </div>

          <div className="row">
            <div className="col-12 py-2">
              <label>{t('auth.signupform.password_confirmation.label')}</label>
              <input
                className="form-control"
                type="password"
                name="password_confirmation"
                placeholder={t('auth.signupform.password_confirmation.placeholder')}
                value={this.state.password_confirmation}
                onChange={this.handleChange}
                required
              />
            </div>
          </div>

          <div className="row">
            <div className="col-12 py-2">
              <button
                type="submit"
                className="btn btn-primary"
              >
                {t('auth.signupform.submit.text')}
              </button>
            </div>
          </div>

        </form>
      </div>
    )
  }
}

export default translate()(SignupForm);