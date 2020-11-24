import React, { useState } from 'react';

import Navigation from '../navigation/Navigation';
import { Logo, CartIcon, MenuIcon } from '../images/Images';

import './Header.scss';

const Header = () => {
  const [navClass, setNavClass] = useState('mobile-navigation-hidden');

  const flipNavClass = () => {
    navClass === 'mobile-navigation'
      ? setNavClass('mobile-navigation-hidden')
      : setNavClass('mobile-navigation');
  };

  return (
    <header>
      <div className='top-background'></div>
      <div className='content-width'>
        <div className='header__row'>
          <Logo
            className='logo'
            width='40%'
            height='40rem'
            alt='Website Logo'
          />
          <div className='header__icons'>
            <div className='cart'>
              <CartIcon width='20px' height='20px' />
            </div>
            <div className='menu' onClick={flipNavClass}>
              <MenuIcon width='20px' height='20px' alt='Menu Icon' />
            </div>
          </div>
        </div>
        <div className={navClass}>
          <Navigation />
        </div>
      </div>
      <div className='desktop-navigation'>Desktop Nav</div>
    </header>
  );
};

export default Header;
