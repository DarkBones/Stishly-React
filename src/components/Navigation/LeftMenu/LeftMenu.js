import React, { Component } from 'react';

function LeftMenu(props) {
  let width = 500;
  if (props.leftMenuRetracted) {
    width = 0;
  }

  const styles = {
    resize: "horizontal",
    width: width,
    minHeight: 300,
    backgroundColor: "lightgray"
  };

  if (props.leftMenuEnabled) {

  }
  return (
    <div style={styles}>
      left menu
    </div>
  );
}

export default LeftMenu;