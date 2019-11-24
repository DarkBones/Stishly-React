import React, { Component } from 'react';
//import Navbar from '../Layout/Navbar';
import LoginForm from '../Auth/LoginForm';

class Home extends Component {
	render() {
		return (
			<div>
				{/*<Navbar />*/}
				<LoginForm />
			</div>
		);
	}
}

export default Home;