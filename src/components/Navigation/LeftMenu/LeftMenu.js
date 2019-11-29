import React from 'react';

function LeftMenu(props) {
  const styles = {
    width: props.extended ? 500 : 0,
    height: 500,
    backgroundColor: 'black'
  }

  if (props.enabled) {
    return (
      <div style={styles}>
        TEST
      </div>
    );
  } else {
    return null;
  }
}

export default LeftMenu;