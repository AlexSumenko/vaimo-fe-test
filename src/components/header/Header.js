import React from 'react';

import { Logo, CartIcon, MenuIcon } from '../images/Images';

import './Header.scss';

const Header = () => {
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
            <div className='mobile-navigation'>
              <MenuIcon width='20px' height='20px' alt='Menu Icon' />
            </div>
          </div>
        </div>
      </div>
      <div className='desktop-navigation'>Desktop Nav</div>
    </header>
  );
};

export default Header;
