import React from 'react';

const Service = props => (
  <div className="content">
    <div className="image">{props.image}</div>
    <div className="title">{props.title}</div>
    <div className="text">{props.text}</div>
  </div>
);

export default Service;
