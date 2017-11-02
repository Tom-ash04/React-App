import React from 'react';
import PropTypes from 'prop-types';

const Image = props =>
  (
    <div>
      <img src={props.src} alt={`img${props.index}`} onClick={props.openLightbox} />
    </div>
  );

Image.propTypes = {
  src: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  openLightbox: PropTypes.func.isRequired,
};

export default Image;
