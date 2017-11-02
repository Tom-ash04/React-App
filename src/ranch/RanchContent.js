import React from 'react';
import PropTypes from 'prop-types';

const RanchContent = props =>
  (
    <div className="ranch_content">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <img className="ranch_img" alt="#" src={props.imgSrc} />
    </div>
  );

RanchContent.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
};

export default RanchContent;
