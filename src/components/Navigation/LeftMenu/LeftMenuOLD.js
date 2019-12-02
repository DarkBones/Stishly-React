import React, { Component } from 'react';
import LeftMenuContext from '../../../contexts/left-menu';

class LeftMenu extends Component {
  constructor(props) {
    super(props);

    this.menuWidth = this.menuWidth.bind(this);
  }

  menuWidth() {
    if (!this.props.extended) {
      return 0;
    }

    if (localStorage.getItem("left-menu-width") !== null) {
      return localStorage.getItem("left-menu-width");
    }

    return 500;
  }

  render() {
    const styles = {
      width: this.menuWidth(),
      height: 500,
      backgroundColor: 'green'
    }

    return (
      <div style={styles}>
        test
      </div>
    );
  }
}

// function LeftMenu(props) {
//   const styles = {
//     width: props.extended ? 500 : 0,
//     height: 500,
//     backgroundColor: 'black'
//   }

//   if (props.enabled) {
//     return (
//       <div style={styles}>
//         TEST
//       </div>
//     );
//   } else {
//     return null;
//   }
// }

export default LeftMenu;