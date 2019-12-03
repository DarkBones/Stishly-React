import React from 'react';
import LeftMenuContext from '../../../../contexts/left-menu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

function CollapseButton(props) {
  return (
    <LeftMenuContext.Consumer>
      {context => (
        context.leftMenuEnabled ?
          <button
            onClick={context.toggleLeftMenu}
            className="btn btn-light mr-4"
          >
            <FontAwesomeIcon icon={faBars} />
          </button>
          : null
      )}
    </LeftMenuContext.Consumer>
  );
}

export default CollapseButton;