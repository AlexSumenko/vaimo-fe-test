import React from 'react';
import { connect } from 'react-redux';

import MiniCartProduct from './miniCartProduct/MiniCartProduct';

import { DeleteIcon } from '../../shared/images/Images';

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
          <MiniCartProduct product={product} />
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
