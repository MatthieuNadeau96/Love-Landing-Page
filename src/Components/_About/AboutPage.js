import React, { Component } from 'react';

class AboutPage extends Component {

  render() {
    return (
      <div className="aboutPage">
        <div className="aboutContainer">
          <div className="title">About Us</div>
          <div className="underline"/>
          <div className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus finibus aliquet leo, quis commodo quam lacinia vitae. Duis tellus ligula, faucibus eget consectetur id, hendrerit vitae sapien. Morbi vulputate sed neque et pellentesque. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Integer sed sapien in.</div>
          <div className="aboutButton">
            <a href="#contact"><button>Contact Us</button></a>
          </div>
        </div>
      </div>
    );
  }

}

export default AboutPage;
