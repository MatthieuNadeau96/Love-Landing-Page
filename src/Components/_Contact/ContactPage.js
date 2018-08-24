import React, { Component } from 'react';

import SocialLinks from './SocialLinks';
import Copyright from './Copyright';

class ContactPage extends Component {

  render() {
    return (
      <div className="contactPage">
        <div className="contactContainer">
          <div className="title">Get in touch</div>
          <div className="underline"/>
          <form className="contactForm">
            <input className="name" type="text" name="name" placeholder="Your Name"/>
            <input className="phone" type="tel" name="phone" placeholder="Your Phone Number"/>
            <input className="email" type="email" name="email" placeholder="Your Email"/>
            <textarea className="message" name="message" placeholder="Your Message"/>
          </form>
          <a><button>Send Message</button></a>
          <SocialLinks/>
          <Copyright/>
        </div>
      </div>
    );
  }

}

export default ContactPage;
