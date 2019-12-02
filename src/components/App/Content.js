import React, { Component } from "react";
import SplitPane from "react-split-pane";
import LeftMenu from "../Navigation/LeftMenu";
import Routes from "./Routes";

class Content extends Component {
  constructor(props) {
    super(props);

    const leftMenuWidth = localStorage.getItem("left-menu-width") == null
      ? 350
      : localStorage.getItem("left-menu-width");
    this.leftMenuWidth = leftMenuWidth;
  }

  render() {
    if (this.props.leftMenuEnabled && this.props.leftMenuExtended) {
      return (
        <SplitPane
          split="vertical"
          minSize={200}
          defaultSize={parseInt(this.leftMenuWidth)}
          onChange={size => localStorage.setItem('left-menu-width', size)}
        >
          <LeftMenu
            enabled={this.props.leftMenuEnabled}
            extended={this.props.leftMenuExtended}
          />
          <Routes />
        </SplitPane>
      );
    } else {
      return (
        <Routes />
      );
    }
  }
}

export default Content;