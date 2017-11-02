import React from 'react';
import PropTypes from 'prop-types';

const Content = props =>
  (
    <div className="main_content">
      <h1>{props.title}</h1>
      <h4>{props.date}</h4>
      <p>{props.content}</p>
      <img className="main_img" alt="#" src={props.imgSrc} />
    </div>
  );

Content.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

export default Content;
