import React from 'react';
import * as actions from '../../../store/actions/index';
import { connect } from 'react-redux';

import MiniCartProduct from './miniCartProduct/MiniCartProduct';

import { DeleteIcon } from '../../shared/images/Images';

import './MiniCart.scss';

const MiniCart = ({
  miniCartProducts,
  refreshProducts,
  backendKey,
  deleted,
}) => {
  const deleteProductFromMiniCartLocally = productId => {
    const updatedMiniCartsProducts = [...miniCartProducts].filter(
      prod => prod.backendId !== productId
    );
    refreshProducts(updatedMiniCartsProducts);
  };

  let miniCartProductList = (
    <p className='mini-cart--empty'>You have no products in your cart</p>
  );
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
            // onClick={deleted.bind(this, product.backendId)}
            onClick={deleteProductFromMiniCartLocally.bind(
              this,
              product.backendId
            )}
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
    backendKey: state.minicart.backendKey,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    refreshProducts: (products, backendKey) =>
      dispatch(actions.refreshMiniCartProducts(products, backendKey)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MiniCart);
