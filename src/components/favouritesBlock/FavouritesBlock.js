import React from 'react';

import SingleProduct from '../singleProduct/SingleProduct';

import './FavouritesBlock.scss';

const FavouritesBlock = () => {
  return (
    <>
      <div className='favourites-block'>
        <h2 className='favourites-block__header'>OUR FAVOURITES</h2>
        <div className='product-grid'>
          <SingleProduct />
          <SingleProduct />
          <SingleProduct />
          <SingleProduct />
        </div>
      </div>
    </>
  );
};

export default FavouritesBlock;
