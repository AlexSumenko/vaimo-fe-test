import React from 'react';
import PropTypes from 'prop-types';

import './SingleProduct.scss';

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

SingleProduct.propTypes = {
  id: PropTypes.number.isRequired,
  image: PropTypes.string,
  name: PropTypes.string.isRequired,
  price: PropTypes.number,
  specialPrice: PropTypes.number,
};

SingleProduct.defaultProps = {
  id: 999,
  image:
    'https://staging-shop3.hellyhansen.com/media/catalog/product/placeholder/default/HH.png',
  name: 'No product name',
  price: 0,
  specialPrice: 0,
};
