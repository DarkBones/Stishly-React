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

    this.state = {
      leftMenuWidth: this.leftMenuWidth
    }
  }

  forceUpdate() {
    console.log("this.props.width");
    if (window.innerWidth <= this.state.leftMenuWidth || window.innerWidth <= 583) {
      this.props.extendLeftMenu(false);
    } else if (window.innerWidth > this.state.leftMenuWidth && window.innerWidth > 583) {
      this.props.extendLeftMenu(true);
    }
  }

  resize = () => this.forceUpdate();

  componentDidMount() {
    window.addEventListener('resize', this.resize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resize);
  }

  render() {
    if (this.props.leftMenuEnabled && this.props.leftMenuExtended) {
      return (
        <SplitPane
          split="vertical"
          minSize={200}
          defaultSize={parseInt(this.leftMenuWidth)}
          onChange={size => {
            localStorage.setItem('left-menu-width', size)
            this.setState({
              leftMenuWidth: size
            });
          }}
        >
          <LeftMenu
            enabled={this.props.leftMenuEnabled}
            extended={this.props.leftMenuExtended}
            extendLeftMenu={this.props.extendLeftMenu}
            width={this.state.leftMenuWidth}
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