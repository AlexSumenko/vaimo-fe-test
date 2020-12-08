import React from 'react';
import PropTypes from 'prop-types';

import Image from '../../../shared/images/image/Image';

import { priceDecimalFormatter } from '../../../../utils/helpers';
import { CURRENCY_SETTINGS } from '../../../../utils/constants';

import './MiniCartProduct.scss';

const MiniCartProduct = ({ product }) => {
  return (
    <div className='mini-cart__product'>
      <Image
        src={product.image}
        height='60rem'
        width='60rem'
        alt='Product in minicart'
      />
      <div className='mini-cart__product-info'>
        <span className='mini-cart__product-info--name'>{product.name}</span>
        <span>
          {`${product.qty} x ${CURRENCY_SETTINGS.currencySign} ${
            product.specialPrice
              ? priceDecimalFormatter(product.specialPrice)
              : priceDecimalFormatter(product.price)
          }`}
        </span>
      </div>
    </div>
  );
};

export default MiniCartProduct;

MiniCartProduct.propTypes = {
  id: PropTypes.number.isRequired,
  image: PropTypes.string,
  name: PropTypes.string.isRequired,
  price: PropTypes.number,
  specialPrice: PropTypes.number,
};

MiniCartProduct.defaultProps = {
  id: 999,
  image:
    'https://staging-shop3.hellyhansen.com/media/catalog/product/placeholder/default/HH.png',
  name: 'No product name',
  price: 0,
  specialPrice: 0,
};
