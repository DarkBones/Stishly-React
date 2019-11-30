import React, { Component } from "react";
import Authenticated from '../Auth/Authenticated';
import LeftMenuContext from '../../contexts/left-menu';
import UserContext from '../../contexts/user';
import Navbar from "../Navigation/Navbar";
import LeftMenu from "../Navigation/LeftMenu";
import { BrowserRouter, Switch } from 'react-router-dom';
import PrivateRoute from '../Auth/PrivateRoute';
import Home from "../Home";
import SignupForm from "../Auth/SignupForm";
import 'bootstrap/dist/css/bootstrap.min.css';
import InprivateRoute from "../Auth/InprivateRoute";


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      authenticated: false,
      leftMenuEnabled: false,
      leftMenuExtended: true
    }

    this.enableLeftMenu = this.enableLeftMenu.bind(this);
    this.toggleLeftMenu = this.toggleLeftMenu.bind(this);
    this.setAuthenticated = this.setAuthenticated.bind(this);
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
            <LeftMenu
              enabled={this.state.leftMenuEnabled}
              extended={this.state.leftMenuExtended}
            />
            <BrowserRouter>
              <Switch>
                {/* Inprivate Routes */}
                <InprivateRoute exact path="/" component={Home} />
                <InprivateRoute exact path="/signup" component={SignupForm} />
                {/* Private Routes */}
                <PrivateRoute exact path="/app" component={SignupForm} />
              </Switch>
            </BrowserRouter>
          </UserContext.Provider>
        </LeftMenuContext.Provider>
      </Authenticated>
    )
  }

}

export default App;