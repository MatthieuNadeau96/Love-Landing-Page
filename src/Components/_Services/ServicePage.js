import React, { Component } from 'react';

import Service from './Service';

class ServicePage extends Component {

  render() {
    return (
      <div className="servicePage">
        <div className="page-title">Services</div>
        <div className="page-subText">Lorem ipsum dolor sit amet.</div>
        <div className="serviceContainer">
          <Service image={<i className="fas fa-globe"></i>} title='Global' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam faucibus, nulla ut vulputate euismod, mauris turpis ullamcorper velit, at.

'/>
          <Service image={<i className="fas fa-smile-beam"></i>} title='Happiness' text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam faucibus, nulla ut vulputate euismod, mauris turpis ullamcorper velit, at."/>
          <Service image={<i className="fas fa-hand-peace"></i>} title='Peace' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam faucibus, nulla ut vulputate euismod, mauris turpis ullamcorper velit, at.

'/>
        </div>
      </div>
    );
  }

}

export default ServicePage;
