import React, { Component } from 'react';

import NavBar from './Navigation/NavBar/NavBar';

import NavMenu from './Navigation/NavMenu';
import Backdrop from './Navigation/Backdrop';

class HomePage extends Component {

  state = {
    navMenuOpen: false
  }

  toggleNavMenu = () => {
    this.setState((prevState) => {
      return {navMenuOpen: !prevState.navMenuOpen}
    });
  }

  backdropToggle = () => {
    this.setState({ navMenuOpen: false })
  }

  render() {
    let navMenu;
    let backdrop;

    if (this.state.navMenuOpen) {
      navMenu = <NavMenu/>;
      backdrop = <Backdrop click={this.backdropToggle}/>;
    }

    return (
      <div>
        <NavBar toggleNavMenu={this.toggleNavMenu}/>
        {backdrop}
        <h1>TITLE</h1>
        {navMenu}
      </div>
    );
  }

}

export default HomePage;
