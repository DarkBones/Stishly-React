import React, { Component } from 'react';

function CollapseButton(props) {
  if (props.leftMenuEnabled) {
    return (
      <button
        onClick={props.onClick}
      >
        coll
      </button>
    );
  } else {
    return null;
  }
}

export default CollapseButton;