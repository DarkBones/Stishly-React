import React from 'react';

export default React.createContext({
  leftMenuEnabled: false,
  leftMenuExtended: true,
  // enableLeftMenu: (enabled) => { },
  toggleLeftMenu: () => { },
  setMobile: () => { }
});