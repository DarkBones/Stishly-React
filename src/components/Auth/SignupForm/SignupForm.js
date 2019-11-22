import React, { Component } from 'react';
import axios from 'axios';

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
      password_configuration: "",
      timezone: "",
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log("Form submitted");
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>First Name</label>
          <input
            className="form-control"
            type="text"
            name="first_name"
            placeholder="First name"
            value={this.state.first_name}
            onChange={this.handleChange}
            required
          />

          <label>Last Name</label>
          <input
            className="form-control"
            type="text"
            name="last_name"
            placeholder="Last name"
            value={this.state.last_name}
            onChange={this.handleChange}
            required
          />

          <label>Email</label>
          <input
            className="form-control"
            type="email"
            name="email"
            placeholder="Email"
            value={this.state.email}
            onChange={this.handleChange}
            required
          />

          <label>Password</label>
          <input
            className="form-control"
            type="password"
            name="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.handleChange}
            required
          />

          <label>Password Confirmation</label>
          <input
            className="form-control"
            type="password"
            name="password_confirmation"
            placeholder="Password confirmation"
            value={this.state.password_confirmation}
            onChange={this.handleChange}
            required
          />

          <button
            type="submit"
            className="btn btn-primary"
          >
            Sign Up
          </button>
        </form>
      </div>
    )
  }
}

export default SignupForm;