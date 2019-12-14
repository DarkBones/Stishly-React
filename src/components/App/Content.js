import React, { Component } from "react";
import SplitPane from "react-split-pane";
import LeftMenu from "../Navigation/LeftMenu";
import Routes from "./Routes";

function LeftMenuContainer(props) {
  if (props.isMobile) {
    return (
      <React.Fragment>
        <div>{props.children[0]}</div>
        <div>{props.children[1]}</div>
      </React.Fragment>
    );
  } else {
    return (
      <SplitPane
        split="vertical"
        minSize={200}
        defaultSize={parseInt(props.leftMenuWidth)}
        onChange={size => {
          localStorage.setItem('left-menu-width', size)
          this.setState({
            leftMenuWidth: size
          });
        }}
      >
        {props.children}
      </SplitPane>
    );
  }
}

class Content extends Component {
  constructor(props) {
    super(props);

    const leftMenuWidth = localStorage.getItem("left-menu-width") == null
      ? 350
      : localStorage.getItem("left-menu-width");
    this.leftMenuWidth = leftMenuWidth;

    const leftMenuExtended = localStorage.getItem("left-menu-extd") == null
      ? 44
      : localStorage.getItem("left-menu-extd") === "true";

    this.state = {
      leftMenuWidth: this.leftMenuWidth,
      leftMenuExtended: leftMenuExtended,
      leftMenuMobile: window.innerWidth <= leftMenuWidth || window.innerWidth <= 583
    }

    this.extendLeftMenu = this.extendLeftMenu.bind(this);
    this.handleResize = this.handleResize.bind(this);
  }

  extendLeftMenu = extended => {
    this.setState({
      leftMenuExtended: extended
    });
  }

  setLeftMenuMobile = isMobile => {
    this.setState({
      leftMenuMobile: isMobile
    });
  }

  handleResize() {
    if (window.innerWidth <= this.state.leftMenuWidth || window.innerWidth <= 583) {
      this.setLeftMenuMobile(true);
    } else if (window.innerWidth > this.state.leftMenuWidth && window.innerWidth > 583) {
      this.setLeftMenuMobile(false);
    }
  }

  resize = () => this.handleResize();

  componentDidMount() {
    window.addEventListener('resize', this.resize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resize);
  }

  render() {
    if (this.props.leftMenuEnabled && this.props.leftMenuExtended) {
      return (
        <LeftMenuContainer leftMenuWidth={this.leftMenuWidth} isMobile={this.state.leftMenuMobile}>
          <LeftMenu
            enabled={this.props.leftMenuEnabled}
            extended={this.state.leftMenuExtended}
            extendLeftMenu={this.extendLeftMenu}
            width={this.state.leftMenuWidth}
          />
          <Routes />
        </LeftMenuContainer>
      );
    } else {
      return (
        <Routes />
      );
    }
  }
}

export default Content;