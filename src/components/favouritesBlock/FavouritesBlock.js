import React from 'react';
import { connect } from 'react-redux';

import SingleProduct from '../shared/singleProduct/SingleProduct';

import './FavouritesBlock.scss';

const FavouritesBlock = ({ products, addProductToCart }) => {
  let productList = [];
  if (products && products.length > 0) {
    productList = products.map(product => (
      <SingleProduct
        key={product.backendId}
        name={product.name}
        image={product.image}
        price={product.price}
        specialPrice={product.specialPrice}
        clicked={addProductToCart.bind(this, product)}
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
  };
};

export default connect(mapStateToProps)(FavouritesBlock);
