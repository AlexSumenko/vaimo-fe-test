import React from 'react';
import PropTypes from 'prop-types';

import { Logo } from '../images/Images';

import './SingleProduct.scss';
import { productListMock } from '../../assets/mock/ProductListMock';

const SingleProduct = props => {
  return (
    <div className='product'>
      <div className='product__image'>
        <img
          src={props.image}
          className='product__image-image'
          height='200px'
          width='200px'
          alt='Product'
        />
      </div>
      <span className='product__name'>{props.name.toUpperCase()}</span>
      <div className='product__price-container'>
        <span className='product__price'>€ {props.price}</span>{' '}
        <span className='product__special-price'>€ {props.specialPrice}</span>
      </div>
      <button type='button' className='subscribe-button'>
        ADD TO CART
      </button>
    </div>
  );
};

export default SingleProduct;
