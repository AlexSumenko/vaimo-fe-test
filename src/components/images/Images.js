import React from 'react';
import PropTypes from 'prop-types';

import logoImage from '../../assets/images/vaimo-logo.png';
import menuIcon from '../../assets/images/menu-icon.png';
import emailIcon from '../../assets/images/email-icon.png';

import './Images.scss';

export const Logo = props => {
  return (
    <img
      src={logoImage}
      width={props.width}
      height={props.height}
      alt={props.alt}
    />
  );
};

export const CartIcon = props => (
  <svg
    version='1.1'
    id='Capa_1'
    xmlns='http://www.w3.org/2000/svg'
    x='0px'
    y='0px'
    width={props.width}
    height={props.height}
    viewBox='0 0 510 510'
  >
    <g>
      <g id='shopping-cart'>
        <path
          d='M153,408c-28.05,0-51,22.95-51,51s22.95,51,51,51s51-22.95,51-51S181.05,408,153,408z M0,0v51h51l91.8,193.8L107.1,306
			c-2.55,7.65-5.1,17.85-5.1,25.5c0,28.05,22.95,51,51,51h306v-51H163.2c-2.55,0-5.1-2.55-5.1-5.1v-2.551l22.95-43.35h188.7
			c20.4,0,35.7-10.2,43.35-25.5L504.9,89.25c5.1-5.1,5.1-7.65,5.1-12.75c0-15.3-10.2-25.5-25.5-25.5H107.1L84.15,0H0z M408,408
			c-28.05,0-51,22.95-51,51s22.95,51,51,51s51-22.95,51-51S436.05,408,408,408z'
        />
      </g>
    </g>
  </svg>
);

export const MenuIcon = props => {
  return (
    <img
      src={menuIcon}
      width={props.width}
      height={props.height}
      alt={props.alt}
    />
  );
};

export const EmailIcon = props => {
  return (
    <img
      src={emailIcon}
      width={props.width}
      height={props.height}
      alt={props.alt}
    />
  );
};

Logo.propTypes = {
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  alt: PropTypes.string,
};

Logo.defaultProps = {
  width: '40%',
  height: '40rem',
  alt: 'Website Logo',
};

CartIcon.propTypes = {
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
};

CartIcon.defaultProps = {
  width: '20px',
  height: '20px',
};

MenuIcon.propTypes = {
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  alt: PropTypes.string,
};

MenuIcon.defaultProps = {
  width: '20px',
  height: '20px',
  alt: 'Menu Icon',
};

EmailIcon.propTypes = {
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  alt: PropTypes.string,
};

EmailIcon.defaultProps = {
  width: '20px',
  height: '20px',
  alt: 'Email Icon',
};
