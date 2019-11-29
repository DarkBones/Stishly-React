import React from 'react';
import LeftMenuContext from '../../../../contexts/left-menu';

function CollapseButton(props) {
  return (
    <LeftMenuContext.Consumer>
      {context => (
        context.leftMenuEnabled ?
          <button
            onClick={context.toggleLeftMenu}
          >
            collapse
          </button>
          : null
      )}
    </LeftMenuContext.Consumer>
  );
}

export default CollapseButton;