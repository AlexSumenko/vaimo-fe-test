import React, { useState } from 'react';

import Button from '../shared/button/Button';
import InputField from '../shared/inputField/InputField';

import { validateEmailFormat } from '../../utils/helpers';

import { EmailIcon } from '../shared/images/Images';

import './Footer.scss';

const Footer = ({ addSubscriber }) => {
  const [emailValue, setEmailValue] = useState('');
  const [loadingState, setLoadingState] = useState(false);
  const [inputClasses, setInputClasses] = useState(['newsletter-form__input']);

  const updateEmailField = event => {
    event.preventDefault();
    setEmailValue(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (validateEmailFormat(emailValue)) {
      setLoadingState(true);
      addSubscriber(emailValue);
      setLoadingState(false);
      setEmailValue('');
    } else if (!inputClasses.includes('invalid-email')) {
      setInputClasses(['newsletter-form__input', 'invalid-email']);
    }
  };

  const clearInvalidStyle = event => {
    event.preventDefault();

    if (inputClasses.includes('invalid-email')) {
      setInputClasses(['newsletter-form__input']);
    }
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
        <div className='footer__section newsletter'>
          <span className='footer__section-header'>NEWSLETTER SUBSCRIBE</span>
          <form className='newsletter-form'>
            <div className='email-icon'>
              <EmailIcon width='16px' height='16px' alt='Email icon' />
            </div>
            <InputField
              inputClasses={inputClasses.join(' ')}
              type='email'
              placeholder='Enter your email address'
              value={emailValue}
              changed={e => updateEmailField(e)}
              focused={e => clearInvalidStyle(e)}
            />
            <Button
              type='button'
              btnColor='vm-green'
              clicked={e => handleSubmit(e)}
            >
              {loadingState ? 'SUBSCRIPTION PROCESSING' : 'SUBSCRIBE'}
            </Button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
