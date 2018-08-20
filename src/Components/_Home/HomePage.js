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
    let backdrop;

    if (this.state.navMenuOpen) {
      backdrop = <Backdrop click={this.backdropToggle}/>;
    }

    return (
      <div>
        <NavBar toggleNavMenu={this.toggleNavMenu}/>
        <NavMenu show={this.state.navMenuOpen}/>
        {backdrop}
        <h1>TITLE</h1>
      </div>
    );
  }

}

export default HomePage;
