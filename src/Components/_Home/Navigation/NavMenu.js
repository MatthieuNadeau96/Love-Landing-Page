import React from 'react';

const NavMenu = props => {
  let menuClasses = ['navMenu'];

  if (props.show) {
    menuClasses = ['navMenu', 'open'];
  }

  return (
    <div className={menuClasses.join(' ')}>
      <ul>
        <li><a href="/">Services</a></li>
        <li><a href="/">About</a></li>
        <li><a href="/">Contact</a></li>
      </ul>
    </div>
  )
};

export default NavMenu;
