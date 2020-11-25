import React from 'react';
import { connect } from 'react-redux';

import { DeleteIcon } from '../images/Images';

import './MiniCart.scss';

const MiniCart = ({ miniCartProducts }) => {
  let miniCartProductList = [];
  if (miniCartProducts && miniCartProducts.length > 0) {
    miniCartProductList = miniCartProducts
      .sort((a, b) => (a.name > b.name ? 1 : b.name > a.name ? -1 : 0))
      .map(product => {
        return (
          <div
            key={product.id}
            className='mini-cart__product-row content-width'
          >
            <div className='mini-cart__product'>
              <img
                src={product.image}
                height='60rem'
                width='60rem'
                alt='Product in minicart'
              />
              <div className='mini-cart__product-info'>
                <span>
                  <strong>{product.name}</strong>
                </span>
                <span>
                  1 x{' '}
                  {product.specialPrice ? product.specialPrice : product.price}
                </span>
              </div>
            </div>
            <div>
              <DeleteIcon />
            </div>
          </div>
        );
      });
  }
  return <div className='mini-cart__container'>{miniCartProductList}</div>;
};
const mapStateToProps = state => {
  return {
    miniCartProducts: state.minicart.miniCartProducts,
  };
};

export default connect(mapStateToProps)(MiniCart);
