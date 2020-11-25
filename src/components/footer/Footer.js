import React from 'react';

import { EmailIcon } from '../images/Images';

import './Footer.scss';

const Footer = () => {
  return (
    <footer className='footer-background'>
      <div className='content-width footer-content'>
        <div className='footer__section'>
          <span className='footer__section-header'>TOP CATEGORIES</span>
          <a href='#' className='footer__section-subheader'>
            WOMEN
          </a>
          <a href='#' className='footer__section-subheader'>
            MEN
          </a>
          <a href='#' className='footer__section-subheader'>
            JUNIOR
          </a>
          <a href='#' className='footer__section-subheader'>
            ACCESSORIES
          </a>
        </div>
        <div className='footer__section'>
          <span className='footer__section-header'>CUSTOMER SERVICE</span>
          <a href='#' className='footer__section-subheader'>
            RETURNS
          </a>
          <a href='#' className='footer__section-subheader'>
            SHIPPING
          </a>
          <a href='#' className='footer__section-subheader'>
            ABOUT US
          </a>
          <a href='#' className='footer__section-subheader'>
            CONTACT US
          </a>
        </div>
        <div className='footer__section'>
          <span className='footer__section-header'>NEWSLETTER SUBSCRIBE</span>
          <form className='newsletter-form'>
            <div className='email-icon'>
              <EmailIcon width='16px' height='16px' alt='Email icon' />
            </div>
            <input
              className='newsletter-form__input'
              type='email'
              placeholder='Enter your email address'
            ></input>
            <button className='subscribe-button' type='button'>
              SUBSCRIBE
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
