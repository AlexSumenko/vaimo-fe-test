import React from 'react';
import PropTypes from 'prop-types';

import './Button.scss';

const Button = props => {
  const btnClasses = ['button', `${props.btnColor}-button`];

  return (
    <button
      className={btnClasses.join(' ')}
      type={props.type}
      onClick={props.clicked}
    >
      {props.children}
    </button>
  );
};

export default Button;

Button.propTypes = {
  type: PropTypes.string,
  btnColor: PropTypes.string,
  clicked: PropTypes.func,
};

Button.defaultProps = {
  type: 'button',
};
