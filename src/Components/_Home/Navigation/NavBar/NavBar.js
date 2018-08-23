import React, { Component } from 'react';

import Logo from './Logo';
import NavButton from './NavButton';

class NavBar extends Component {

  render() {
    return (
      <div className="navBar">
        <div className="navContainer">
          <Logo/>
          <NavButton className="navBtn" toggleNavMenu={this.props.toggleNavMenu} click={this.props.toggleNavMenu}/>
          <ul>
            <a href="#services"><li>Services</li></a>
            <a href="#about"><li>About</li></a>
            <a href="#contact"><li>Contact</li></a>
          </ul>
        </div>
      </div>
    );
  }

}

export default NavBar;
