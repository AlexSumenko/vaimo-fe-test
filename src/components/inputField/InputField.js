import React from 'react';
import PropTypes from 'prop-types';

import './InputField.scss';

const InputField = props => {
  return (
    <input
      className={props.inputClasses}
      type={props.type}
      placeholder={props.placeholder}
      value={props.value}
      onChange={props.changed}
      onFocus={props.focused}
    />
  );
};

export default InputField;

InputField.propTypes = {
  type: PropTypes.string.isRequired,
  inputClasses: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  changed: PropTypes.func,
  focused: PropTypes.func,
};
InputField.defaultProps = {
  type: 'input',
  inputClasses: 'newsletter-form__input',
};
