import React, { Component } from 'react';
import axios from 'axios';
import { translate } from 'react-i18next';

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
		axios.post("http://localhost:3001/login",
		{
			user: {
				email: email,
				password: password,
			}
		},
		{ withCredentials: true })
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
		const { t, i18n } = this.props;
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<div className="row">
						<div className="col-12 py-2">
							<label>{t('auth.loginform.email.label')}</label>
							<input
								className="form-control"
								type="email"
								name="email"
								placeholder={t('auth.loginform.email.placeholder')}
								value={this.state.email}
								onChange={this.handleChange}
								required
							/>
						</div>
					</div>

					<div className="row">
						<div className="col-12 py-2">
							<label>{t('auth.loginform.password.label')}</label>
							<input
								className="form-control"
								type="password"
								name="password"
								placeholder={t('auth.loginform.password.placeholder')}
								value={this.state.password}
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
								{t('auth.loginform.submit.text')}
							</button>
						</div>
					</div>

				</form>
			</div>
		);
	}
}

export default translate()(LoginForm);