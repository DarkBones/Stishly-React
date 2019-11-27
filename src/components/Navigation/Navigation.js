import React, { Component } from 'react';
import Navbar from './Navbar';
import LeftMenu from './LeftMenu';

class Navigation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      leftMenuEnabled: true,
      leftMenuRetracted: false
    }

    this.enableLeftMenu = this.enableLeftMenu.bind(this);
    this.toggleLeftMenu = this.toggleLeftMenu.bind(this);
  }

  enableLeftMenu(enabled) {
    this.setState({
      leftMenu: {
        enabled: enabled
      }
    });
  }

  toggleLeftMenu() {
    const retracted = !this.state.leftMenuRetracted
    this.setState({
      leftMenuRetracted: retracted
    });
  }

  render() {
    return (
      <div>
        <Navbar
          leftMenuRetracted={this.state.leftMenuRetracted}
          leftMenuEnabled={this.state.leftMenuEnabled}
          toggleLeftMenu={this.toggleLeftMenu}
        />
        <LeftMenu
          leftMenuRetracted={this.state.leftMenuRetracted}
        />
      </div>
    )
  }
}

export default Navigation;