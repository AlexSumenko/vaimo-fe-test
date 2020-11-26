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
