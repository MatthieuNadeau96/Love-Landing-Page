import React, { Component } from 'react';
import './app.css';

import HomePage from './Components/_Home/HomePage';
import ServicePage from './Components/_Services/ServicePage';
import AboutPage from './Components/_About/AboutPage';
import ContactPage from './Components/_Contact/ContactPage';
import ScrollableAnchor from 'react-scrollable-anchor';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ScrollableAnchor id="home">
          <HomePage/>
        </ScrollableAnchor>
        <ScrollableAnchor id="services">
          <ServicePage/>
        </ScrollableAnchor>
        <ScrollableAnchor id="about">
          <AboutPage/>
        </ScrollableAnchor>
        <ScrollableAnchor id="contact">
          <ContactPage/>
        </ScrollableAnchor>
      </div>
    );
  }
}

export default App;
