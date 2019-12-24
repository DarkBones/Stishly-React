import React, { Component } from "react";
import Authenticated from "../Auth/Authenticated";
import LeftMenuContext from "../../contexts/left-menu";
import UserContext from "../../contexts/user";
import Navbar from "../Navigation/Navbar";
import Content from "./Content";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      authenticated: false,
      leftMenuExtended: localStorage.getItem("left-menu-extd") == null
        ? true
        : localStorage.getItem("left-menu-extd") === "true"
    }

    this.setAuthenticated = this.setAuthenticated.bind(this);
    this.toggleLeftMenu = this.toggleLeftMenu.bind(this);
    this.setAuthenticated = this.setAuthenticated.bind(this);
    this.setMobile = this.setMobile.bind(this);
  }

  setAuthenticated = authenticated => {
    this.setState({
      authenticated: authenticated
    });
  }

  toggleLeftMenu() {
    this.setState({
      leftMenuExtended: !this.state.leftMenuExtended
    });

    localStorage.setItem("left-menu-extd", !this.state.leftMenuExtended);
  }

  setMobile = isMobile => {
    this.setState({
      isMobile: isMobile,
    });
  }

  setAuthenticated = authenticated => {
    this.setState({
      authenticated: authenticated
    });
  }

  render() {
    return (
      <Authenticated
        setAuthenticated={this.setAuthenticated}
      >
        <LeftMenuContext.Provider value={{
          leftMenuEnabled: this.state.authenticated,
          leftMenuExtended: this.state.leftMenuExtended,
          toggleLeftMenu: this.toggleLeftMenu,
          setMobile: this.setMobile,
        }}>
          <UserContext.Provider value={{
            authenticated: this.state.authenticated,
            setAuthenticated: this.setAuthenticated
          }}>
            <Navbar />
            <Content toggleLeftMenu={this.toggleLeftMenu} />
          </UserContext.Provider>
        </LeftMenuContext.Provider>
      </Authenticated>
    );
  }
}

export default App;