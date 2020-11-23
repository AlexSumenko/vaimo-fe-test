import React from 'react';
import PropTypes from 'prop-types';

import { Logo } from '../images/Images';

import './SingleProduct.scss';

const SingleProduct = props => {
  return (
    <div className='product'>
      <div className='product__image'>
        <Logo
          className='product__image-image'
          height='200px'
          width='200px'
          alt='Product Image'
        />
      </div>
      <span className='product__name'>NAME</span>
      <span className='product__price'>PRICE</span>
      <button type='button' className='subscribe-button'>
        ADD TO CART
      </button>
    </div>
  );
};

export default SingleProduct;
