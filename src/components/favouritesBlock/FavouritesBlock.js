import React from 'react';

import SingleProduct from '../singleProduct/SingleProduct';

import { productListMock } from '../../assets/mock/ProductListMock';

import './FavouritesBlock.scss';

const FavouritesBlock = () => {
  const productList = productListMock.map(product => (
    <SingleProduct
      key={product.id}
      name={product.name}
      image={product.image}
      price={product.price}
      specialPrice={product.specialPrice}
    />
  ));

  return (
    <>
      <div className='favourites-block'>
        <h2 className='favourites-block__header'>OUR FAVOURITES</h2>
        <div className='product-grid'>{productList}</div>
      </div>
    </>
  );
};

export default FavouritesBlock;
