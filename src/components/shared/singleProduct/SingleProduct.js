import React from 'react';
import PropTypes from 'prop-types';

import Button from '../button/Button';
import Image from '../images/image/Image';

import { CURRENCY_SETTINGS } from '../../../utils/constants';
import { priceDecimalFormatter } from '../../../utils/helpers';

import './SingleProduct.scss';

const SingleProduct = props => {
  return (
    <div className='product'>
      <div className='product__image-container'>
        <Image
          imageClasses='product__image'
          src={props.image}
          height='160rem'
          width='160rem'
          alt='Product'
        />
      </div>
      <span className='product__name'>{props.name.toUpperCase()}</span>
      <div className='product__price-container'>
        {props.specialPrice <= 0 ? (
          <span>
            {CURRENCY_SETTINGS.currencySign}{' '}
            {priceDecimalFormatter(props.price)}
          </span>
        ) : (
          <>
            <strike>
              <span>
                {CURRENCY_SETTINGS.currencySign}{' '}
                {priceDecimalFormatter(props.price)}
              </span>
            </strike>{' '}
            <span className='product__special-price'>
              {CURRENCY_SETTINGS.currencySign}{' '}
              {priceDecimalFormatter(props.specialPrice)}
            </span>
          </>
        )}
      </div>
      <Button
        type='button'
        btnColor='vm-green'
        clicked={props.clicked.bind(this)}
      >
        ADD TO CART
      </Button>
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
  added: PropTypes.func,
};

SingleProduct.defaultProps = {
  id: 999,
  image:
    'https://staging-shop3.hellyhansen.com/media/catalog/product/placeholder/default/HH.png',
  name: 'No product name',
  price: 0,
  specialPrice: 0,
};
