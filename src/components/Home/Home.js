import React, { Component } from 'react';
import LoginForm from '../Auth/LoginForm';
import { getJwt } from '../../helpers/jwt';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import { translate } from 'react-i18next';

class Home extends Component {
	constructor(props) {
		super(props);

		this.state = {
			loading: true
		};
	}

	componentDidMount() {
		const jwt = getJwt();

		if (jwt) {
			axios.get("http://localhost:3001/api/v1/user/get_user/", {
				headers: { Authorization: `Bearer ${jwt}` }
			})
				.then(response => {
					this.props.history.push("/app");
				}).catch(error => this.setState(
					{
						loading: false
					}
				));
		} else {
			this.setState(
				{
					loading: false
				}
			);
		}
	}

	render() {
		const { t } = this.props;

		if (this.state.loading) {
			return (
				<div>
					{/* TODO: Make this look better */}
					<h1>{t('auth.authenticated.loading')} ...</h1>
				</div>
			)
		}

		return (
			<LoginForm />
		);
	}
}

export default withRouter(translate()(Home));