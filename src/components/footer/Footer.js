import React, { useState } from 'react';

import { EmailIcon } from '../images/Images';

import './Footer.scss';

const Footer = props => {
  const [emailValue, setEmailValue] = useState('');
  const [loadingState, setLoadingState] = useState(false);

  const updateEmailField = event => {
    event.preventDefault();
    setEmailValue(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    setLoadingState(true);
    props.addSubscriber(emailValue);
    setLoadingState(false);
    setEmailValue('');
  };

  return (
    <footer className='footer-background'>
      <div className='content-width footer-content'>
        <div className='footer__section'>
          <span className='footer__section-header'>TOP CATEGORIES</span>
          <a href='/' className='footer__section-subheader'>
            WOMEN
          </a>
          <a href='/' className='footer__section-subheader'>
            MEN
          </a>
          <a href='/' className='footer__section-subheader'>
            JUNIOR
          </a>
          <a href='/' className='footer__section-subheader'>
            ACCESSORIES
          </a>
        </div>
        <div className='footer__section'>
          <span className='footer__section-header'>CUSTOMER SERVICE</span>
          <a href='/' className='footer__section-subheader'>
            RETURNS
          </a>
          <a href='/' className='footer__section-subheader'>
            SHIPPING
          </a>
          <a href='/' className='footer__section-subheader'>
            ABOUT US
          </a>
          <a href='/' className='footer__section-subheader'>
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
              value={emailValue}
              onChange={e => updateEmailField(e)}
            ></input>
            <button
              className='subscribe-button'
              type='button'
              onClick={e => handleSubmit(e)}
            >
              {loadingState ? 'SUBSCRIPTION PROCESSING' : 'SUBSCRIBE'}
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
