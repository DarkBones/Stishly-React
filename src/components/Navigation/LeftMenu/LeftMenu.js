import React, { Component } from 'react';

function LeftMenuSection(props) {
  return (
    <div className="section">
      <h4>{props.title}</h4>
    </div>
  );
}

class LeftMenu extends Component {

  render() {
    if (this.props.extended) {
      return (
        <div className="container container-content">
          <LeftMenuSection title="ACCOUNTS" />
        </div>
      );
    } else {
      return null;
    }
  }
}

export default LeftMenu;