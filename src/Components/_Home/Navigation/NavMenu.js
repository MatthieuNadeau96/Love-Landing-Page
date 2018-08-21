import React from 'react';

const NavMenu = props => {
  let menuClasses = ['navMenu'];

  if (props.show) {
    menuClasses = ['navMenu', 'open'];
  }

  return (
    <div className={menuClasses.join(' ')}>
      <ul>
        <li><a href="#services" onClick={props.clicked}>Services</a></li>
        <li><a href="#about" onClick={props.clicked}>About</a></li>
        <li><a href="#contact" onClick={props.clicked}>Contact</a></li>
      </ul>
    </div>
  )
};

export default NavMenu;
