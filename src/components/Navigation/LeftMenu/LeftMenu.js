import React, { Component } from 'react';
import LeftMenuContext from '../../../contexts/left-menu';

class LeftMenu extends Component {
  render() {
    if (this.props.extended) {
      return (
        <div>
          test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test
        </div>
      );
    } else {
      return null;
    }
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