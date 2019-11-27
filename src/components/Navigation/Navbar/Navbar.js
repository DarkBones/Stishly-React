import React, { Component } from 'react';
import CollapseButton from './CollapseButton';
import logo from '../../../assets/images/logo';

function Navbar(props) {
	return (
		<nav className="navbar navbar-light bg-light fixed-top py-0 navbar-expand-sm py-2" id="navbar-top">
			<CollapseButton
				leftMenuEnabled={props.leftMenuEnabled}
				leftMenuRetracted={props.leftMenuRetracted}
				onClick={props.toggleLeftMenu}
			/>
			<img src={logo} className="logo" alt="Stishly" height="50" />
		</nav>
	);
}

export default Navbar;