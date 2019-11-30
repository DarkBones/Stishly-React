import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import '../../assets/css/App';
import Home from '../Home';
import SignupForm from '../Auth/SignupForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import Authenticated from '../Auth/Authenticated';
import Application from '../Application';
import LeftMenuContext from '../../contexts/left-menu';
import Navbar from '../Navigation/Navbar';
import LeftMenu from '../Navigation/LeftMenu';
import isAuthenticated from '../../helpers/authenticated';

import history from "../../history";
// import authenticated from '../../helpers/authenticated';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      leftMenuEnabled: false,
      leftMenuExtended: true
    }

    this.enableLeftMenu = this.enableLeftMenu.bind(this);
    this.toggleLeftMenu = this.toggleLeftMenu.bind(this);
  }

  componentDidMount() {
    // const authenticated = isAuthenticated();
    // alert(isAuthenticated());
  }

  enableLeftMenu = enabled => {
    this.setState({
      leftMenuEnabled: enabled
    });
  };

  toggleLeftMenu() {
    this.setState({
      leftMenuExtended: !this.state.leftMenuExtended
    });
  };

  render() {
    return (
      <LeftMenuContext.Provider value={{
        leftMenuEnabled: this.state.leftMenuEnabled,
        leftMenuExtended: this.state.leftMenuExtended,
        enableLeftMenu: this.enableLeftMenu,
        toggleLeftMenu: this.toggleLeftMenu
      }}>
        <Navbar />
        <LeftMenu
          enabled={this.state.leftMenuEnabled}
          extended={this.state.leftMenuExtended}
        />
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/signup" component={SignupForm} />
            <Authenticated history={history}>
              <Route path="/app" component={Application} />
            </Authenticated>
          </Switch>
        </BrowserRouter>
      </LeftMenuContext.Provider>
    );
  }
}

export default App;
