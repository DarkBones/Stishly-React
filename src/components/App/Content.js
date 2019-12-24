import React, { Component } from "react";
import SplitPane from "react-split-pane";
import LeftMenuContext from "../../contexts/left-menu";
import LeftMenu from "../Navigation/LeftMenu";
import Routes from "./Routes";

function LeftMenuContainer(props) {
  if (props.isMobile) {
    return (
      <React.Fragment>
        <div>{props.leftMenu}</div>
        <div>{props.children}</div>
      </React.Fragment>
    );
  } else {
    return (
      <SplitPane
        split="vertical"
        minSize={200}
        defaultSize={parseInt(props.leftMenuWidth)}
        onChange={size => {
          localStorage.setItem("left-menu-width", size)
        }}
      >
        {props.leftMenu}
        {props.children}
      </SplitPane>
    );
  }
}

function LeftMenuRender(props) {
  // let extended = localStorage.getItem("left-menu-extd") == null
  //   ? true
  //   : localStorage.getItem("left-menu-extd") === "true";

  return (
    <LeftMenu
      enabled={props.leftMenuEnabled}
      width={props.leftMenuWidth}
    />
  );
}

function leftMenuWidth() {
  let width = localStorage.getItem("left-menu-width") == null
    ? 350
    : parseInt(localStorage.getItem("left-menu-width"));
  return width;
}

function isMobile() {
  let menuWidth = leftMenuWidth();

  return window.innerWidth <= menuWidth || window.innerWidth <= 583
}

function ContentRender(props) {
  if (props.leftMenuEnabled && props.leftMenuExtended) {
    if (props.isMobile) {
      return (
        <React.Fragment>
          <div>{props.leftMenu}</div>
          <div>{props.children}</div>
        </React.Fragment>
      );
    } else {
      return (
        <SplitPane
          split="vertical"
          minSize={200}
          defaultSize={parseInt(props.leftMenuWidth)}
          onChange={size => {
            localStorage.setItem("left-menu-width", size)
          }}
        >
          {props.leftMenu}
          {props.children}
        </SplitPane>
      );
    }
  } else {
    return <Routes />;
  }
}

class Content extends Component {
  constructor(props) {
    super(props);

    this.isMobile = this.isMobile.bind(this);
    this.handleResize = this.handleResize.bind(this);

    this.state = {
      isMobile: this.isMobile()
    }
  }

  isMobile() {
    let menuWidth = leftMenuWidth();
    return window.innerWidth <= menuWidth || window.innerWidth <= 583
  }

  handleResize() {
    let mobile = isMobile();

    if (mobile !== this.state.isMobile) {
      this.setState({
        isMobile: isMobile(),
      });

      this.props.toggleLeftMenu();
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
    return (
      <LeftMenuContext.Consumer>
        {context => (
          <ContentRender
            isMobile={this.state.isMobile}
            leftMenuEnabled={context.leftMenuEnabled}
            leftMenuExtended={context.leftMenuExtended}
            leftMenu={<LeftMenuRender />}
            leftMenuWidth={leftMenuWidth()}
          >
            <Routes />
          </ContentRender>
        )}
      </LeftMenuContext.Consumer>
    );
  }
}

export default Content;