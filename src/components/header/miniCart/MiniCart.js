import React from 'react';
import { connect } from 'react-redux';

import Image from '../../shared/images/image/Image';

import { DeleteIcon } from '../../shared/images/Images';

import { CURRENCY_SETTINGS } from '../../../utils/constants';
import { priceDecimalFormatter } from '../../../utils/helpers';

import './MiniCart.scss';

const MiniCart = ({ miniCartProducts, deleted }) => {
  let miniCartProductList = [];
  if (miniCartProducts && miniCartProducts.length > 0) {
    miniCartProductList = miniCartProducts.map(product => {
      return (
        <div
          key={product.backendId}
          className='mini-cart__product-row content-width'
        >
          <div className='mini-cart__product'>
            <Image
              src={product.image}
              height='60rem'
              width='60rem'
              alt='Product in minicart'
            />
            <div className='mini-cart__product-info'>
              <span>
                <strong>{product.name.toUpperCase()}</strong>
              </span>
              <span>
                1 x {`${CURRENCY_SETTINGS.currencySign} `}
                {product.specialPrice
                  ? priceDecimalFormatter(product.specialPrice)
                  : priceDecimalFormatter(product.price)}
              </span>
            </div>
          </div>
          <div
            className='mini-cart__delete-icon'
            onClick={deleted.bind(this, product.backendId)}
          >
            <DeleteIcon />
          </div>
        </div>
      );
    });
  }
  return <>{miniCartProductList}</>;
};

const mapStateToProps = state => {
  return {
    miniCartProducts: state.minicart.miniCartProducts,
  };
};

export default connect(mapStateToProps)(MiniCart);
