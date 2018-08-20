import React, { Component } from 'react';

import Logo from './Logo';
import NavButton from './NavButton';

class NavBar extends Component {

  render() {

    return (
      <div className="navBar">
        <Logo/>
        <NavButton className="navBtn" toggleNavMenu={this.props.toggleNavMenu} click={this.props.toggleNavMenu}/>
        <ul>
          <a href='/'><li>Services</li></a>
          <a href='/'><li>About</li></a>
          <a href='/'><li>Contact</li></a>
        </ul>
      </div>
    );
  }

}

export default NavBar;
