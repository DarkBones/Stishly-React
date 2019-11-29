import React from 'react';
import CollapseButton from './CollapseButton';
import logo from '../../../assets/images/logo';
import LeftMenuContext from '../../../contexts/left-menu';

function Navbar(props) {
	return (
		<LeftMenuContext.Consumer>
			{context => (
				<nav className="navbar navbar-light bg-light fixed-top py-0 navbar-expand-sm py-2" id="navbar-top">
					<CollapseButton
						leftMenuEnabled={true}
						leftMenuRetracted={props.leftMenuRetracted}
						onClick={context.toggleLeftMenu}
					/>
					<img src={logo} className="logo" alt="Stishly" height="50" />
				</nav>
			)}
		</LeftMenuContext.Consumer>
	);
}

export default Navbar;