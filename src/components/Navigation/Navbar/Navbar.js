import React from 'react';
import CollapseButton from './CollapseButton';
import logo from '../../../assets/images/logo';
import LeftMenuContext from '../../../contexts/left-menu';

function Navbar(props) {
	return (
		<LeftMenuContext.Consumer>
			{context => (
				<nav className="navbar navbar-light bg-light fixed-top py-0 navbar-expand py-2" id="navbar-top">
					<CollapseButton
						leftMenuEnabled={true}
						leftMenuRetracted={props.leftMenuRetracted}
						onClick={context.toggleLeftMenu}
					/>
					<a href="/">
						<img src={logo} className="logo" alt="Stishly" height="40" />
					</a>
				</nav>
			)
			}
		</LeftMenuContext.Consumer >
	);
}

export default Navbar;