import React, { Component } from 'react';
import axios from 'axios';

class LoginForm extends Component {
	constructor(props) {
		super(props);

		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);

		this.state = {
			email: "",
			password: "",
		};
	}

	handleSubmit(event) {
		const {
			email,
			password,
		} = this.state;

		event.preventDefault();
		axios.post("http://localhost:3001/users/sign_in",
		{
			user: {
				email: email,
				password: password,
			}
		},
		{ withCredentials: true })
		.then(response => {
			console.log("Success");
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
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<input
						className="form-control"
						type="email"
						name="email"
						placeholder="Email"
						value={this.state.email}
						onChange={this.handleChange}
						required
					/>

					<input
						className="form-control"
						type="password"
						name="password"
						placeholder="Password"
						value={this.state.password}
						onChange={this.handleChange}
						required
					/>

					<button
						type="submit"
						className="btn btn-primary"
					>
						Log In
					</button>
				</form>
			</div>
		);
	}
}

export default LoginForm;