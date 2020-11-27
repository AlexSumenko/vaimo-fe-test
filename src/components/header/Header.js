import React, { useState } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';

import MiniCart from './miniCart/MiniCart';
import Navigation from './navigation/Navigation';
import { Logo, CartIcon, MenuIcon } from '../shared/images/Images';

import {
  calculateTotalPriceOfProducts,
  unitQuantityFormatter,
} from '../../utils/helpers';

import './Header.scss';

const Header = ({ miniCartProducts, deleteProductFromMiniCart }) => {
  // TODO Would be awesome to use useReducer to toggle classes dependent on each other (blush)

  const [navClass, setNavClass] = useState('mobile-navigation--hidden');
  const [miniCartClass, setMiniCartClass] = useState('mini-cart--hidden');

  const flipNavClass = () => {
    if (navClass === 'mobile-navigation--hidden') {
      setNavClass('mobile-navigation');
      setMiniCartClass('mini-cart--hidden');
    } else {
      setNavClass('mobile-navigation--hidden');
    }
  };

  const flipMiniCartClass = () => {
    if (miniCartClass === 'mini-cart--hidden') {
      setMiniCartClass('mini-cart');
      setNavClass('mobile-navigation--hidden');
    } else {
      setMiniCartClass('mini-cart--hidden');
    }
  };

  return (
    <header className='header'>
      <div className='top-background'></div>
      <div className='content-width'>
        <div className='header__row'>
          <Logo width='40%' height='40rem' alt='Website Logo' />
          <div className='header__icons'>
            <div className='cart' onClick={flipMiniCartClass}>
              <CartIcon width='20px' height='20px' />
              <span className='cart__products'>
                {miniCartProducts.length}{' '}
                {unitQuantityFormatter('item', miniCartProducts.length)} in your
                cart
              </span>
              <span className='cart__price'>
                € {calculateTotalPriceOfProducts(miniCartProducts)}
              </span>
            </div>
            <div className={miniCartClass}>
              <MiniCart
                deleted={productId => deleteProductFromMiniCart(productId)}
              />
            </div>
            <div className='menu' onClick={flipNavClass}>
              <MenuIcon width='20px' height='20px' alt='Menu Icon' />
            </div>
            <div className={miniCartClass}>
              <MiniCart
                deleted={productId => deleteProductFromMiniCart(productId)}
              />
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

const mapStateToProps = state => {
  return {
    miniCartProducts: state.minicart.miniCartProducts,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deleteProductFromMiniCart: productId =>
      dispatch(actions.deleteMiniCartProduct(productId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
