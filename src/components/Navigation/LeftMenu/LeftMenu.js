import React, { Component } from 'react';

class LeftMenu extends Component {
  render() {
    if (this.props.extended) {
      return (
        <div className="container">
          <h4>ACCOUNTS</h4>
          <p>
            test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test
          </p>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default LeftMenu;