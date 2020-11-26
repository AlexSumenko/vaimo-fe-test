import React from 'react';
import PropTypes from 'prop-types';

import './Image.scss';

const Image = props => {
  return (
    <img
      className={props.imageClasses}
      src={props.src}
      height={props.height}
      width={props.width}
      alt={props.alt}
    />
  );
};

export default Image;

Image.propTypes = {
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  alt: PropTypes.string,
  imageClasses: PropTypes.string,
};

Image.defaultProps = {
  width: '20px',
  height: '20px',
  alt: 'Delete Icon',
};
