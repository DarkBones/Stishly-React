import React, { Component } from 'react';
import logo from '../../../assets/images/logo';

class Navbar extends Component {
	render() {
		const { children, color, onClick } = this.props;

		return (
			<nav className="navbar navbar-light bg-light fixed-top py-0 navbar-expand-sm py-2" id="navbar-top">
				<img src={logo} className="logo" alt="Stishly" height="50" />
			</nav>
		);
	}
}

export default Navbar;