import React, { Component } from 'react';

import SocialLinks from './SocialLinks';
import Copyright from './Copyright';

class ContactPage extends Component {

  render() {
    return (
      <div className="contactPage">
        <div className="contactContainer">
          <div className="title">Get in touch</div>
          <form className="contactForm">
            <input type="text" name="name" className="name" placeholder="Your Name"/>
            <input type="tel" name="phone" className="phone" placeholder="Your Phone Number"/>
            <input type="email" name="email" className="email" placeholder="Your Email"/>
            <textarea rows="1" name="message" placeholder="Your Message"/>
            <button>Send Message</button>
          </form>
          <SocialLinks/>
          <Copyright/>
        </div>
      </div>
    );
  }

}

export default ContactPage;
