import React, { Component } from 'react';

import NavBar from './Navigation/NavBar/NavBar';
import NavMenu from './Navigation/NavMenu';
import Backdrop from './Navigation/Backdrop';


class HomePage extends Component {

  constructor(props) {
  super(props);
  this.myRef = React.createRef();
}

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

  handleScrollToElement = (e) => {
    window.scrollTo({top: this.myRef, behavior: 'smooth'});
  }

  render() {
    let backdrop;

    if (this.state.navMenuOpen) {
      backdrop = <Backdrop click={this.backdropToggle}/>;
    }

    return (
      <div className="homePage">
        <NavBar toggleNavMenu={this.toggleNavMenu}/>
        <NavMenu show={this.state.navMenuOpen} clicked={this.backdropToggle}/>
        {backdrop}
        <div className="homeContent">
          <div className="title">Love Landing</div>
          <div className="subTitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
          <div className="learnMoreBtn">
            <a href="#services"><button>Learn More</button></a>
          </div>
        </div>
      </div>
    );
  }

}

export default HomePage;
