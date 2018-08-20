import React, { Component } from 'react';
import './app.css';

import HomePage from './Components/_Home/HomePage';
import ServicePage from './Components/_Services/ServicePage';
import AboutPage from './Components/_About/AboutPage';
import ContactPage from './Components/_Contact/ContactPage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HomePage/>
        <ServicePage/>
        <AboutPage/>
        <ContactPage/>
      </div>
    );
  }
}

export default App;
