import React from 'react';
import * as actions from '../../store/actions/index';
import { connect } from 'react-redux';

import SingleProduct from '../shared/singleProduct/SingleProduct';

import './FavouritesBlock.scss';

const FavouritesBlock = ({
  products,
  miniCartProducts,
  replaceProductsInMiniCart,
}) => {
  let productList = [];

  const refreshMiniCartProducts = product => {
    const updatedMiniCartProducts = [...miniCartProducts];
    if (
      !updatedMiniCartProducts.find(
        prod => prod.backendId === product.backendId
      )
    ) {
      updatedMiniCartProducts.push(product);
      console.log(updatedMiniCartProducts);
      replaceProductsInMiniCart(updatedMiniCartProducts);
      return;
    }
    for (const prod of updatedMiniCartProducts) {
      if (prod.backendId === product.backendId) {
        prod.qty++;
      }
    }
    console.log(updatedMiniCartProducts);

    replaceProductsInMiniCart(updatedMiniCartProducts);
  };

  if (products && products.length > 0) {
    productList = products.map(product => (
      <SingleProduct
        key={product.backendId}
        name={product.name}
        image={product.image}
        price={product.price}
        specialPrice={product.specialPrice}
        // clicked={addProductToCart.bind(this, product)}
        clicked={refreshMiniCartProducts.bind(this, product)}
      />
    ));
  }
  return (
    <>
      <div className='favourites-block'>
        <h2 className='favourites-block__header'>OUR FAVOURITES</h2>
        <div className='product-grid'>{productList}</div>
      </div>
    </>
  );
};

const mapStateToProps = state => {
  return {
    products: state.prd.products,
    miniCartProducts: state.minicart.miniCartProducts,
  };
};

const dispatchStateToProps = dispatch => {
  return {
    replaceProductsInMiniCart: products =>
      dispatch(actions.refreshMiniCartProducts(products)),
  };
};

export default connect(mapStateToProps, dispatchStateToProps)(FavouritesBlock);
