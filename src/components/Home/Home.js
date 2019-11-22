import React, { Component } from 'react';
//import Navbar from '../Layout/Navbar';
import LoginForm from '../Auth/LoginForm';
import SignupForm from '../Auth/SignupForm';

class Home extends Component {
	render() {
		return (
			<div>
				{/*<Navbar />*/}
      	<SignupForm />
			</div>
		);
	}
}

export default Home;