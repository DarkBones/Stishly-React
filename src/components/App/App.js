import React, { Component } from "react";
import Authenticated from '../Auth/Authenticated';
import LeftMenuContext from '../../contexts/left-menu';
import UserContext from '../../contexts/user';
import Navbar from "../Navigation/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import Content from "./Content";

class App extends Component {
  constructor(props) {
    super(props);

    const leftMenuExtended = localStorage.getItem("left-menu-extd") == null
      ? 44
      : localStorage.getItem("left-menu-extd") === "true";

    this.state = {
      authenticated: false,
      leftMenuEnabled: false,
      leftMenuExtended: leftMenuExtended
    }

    this.enableLeftMenu = this.enableLeftMenu.bind(this);
    this.toggleLeftMenu = this.toggleLeftMenu.bind(this);
    this.setAuthenticated = this.setAuthenticated.bind(this);

    const leftMenuWidth = localStorage.getItem("splitPos") == null
      ? 350
      : localStorage.getItem("splitPos");
    this.leftMenuWidth = leftMenuWidth;
  }

  enableLeftMenu = enabled => {
    this.setState({
      leftMenuEnabled: enabled
    });
  }

  toggleLeftMenu() {
    this.setState({
      leftMenuExtended: !this.state.leftMenuExtended
    });

    localStorage.setItem("left-menu-extd", !this.state.leftMenuExtended);
  }

  setAuthenticated = authenticated => {
    this.setState({
      authenticated: authenticated,
      leftMenuEnabled: authenticated
    });
  }

  render() {
    return (
      <Authenticated
        setAuthenticated={this.setAuthenticated}
      >
        <LeftMenuContext.Provider value={{
          leftMenuEnabled: this.state.leftMenuEnabled,
          leftMenuExtended: this.state.leftMenuEnabled,
          enableLeftMenu: this.enableLeftMenu,
          toggleLeftMenu: this.toggleLeftMenu
        }}>
          <UserContext.Provider value={{
            authenticated: this.state.authenticated,
            setAuthenticated: this.setAuthenticated
          }}>
            <Navbar />
            {/* <LeftMenu
              enabled={this.state.leftMenuEnabled}
              extended={this.state.leftMenuExtended}
            /> */}
            <Content
              leftMenuEnabled={this.state.leftMenuEnabled}
              leftMenuExtended={this.state.leftMenuExtended}
              leftMenuWidth={200}
            />
          </UserContext.Provider>
        </LeftMenuContext.Provider>
      </Authenticated >
    )
  }

}

export default App;