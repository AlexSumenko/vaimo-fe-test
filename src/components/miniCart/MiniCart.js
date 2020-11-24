import React from 'react';

import { productListMock } from '../../assets/mock/ProductListMock';

import './MiniCart.scss';

const MiniCart = () => {
  const miniCartProductList = productListMock
    .filter(product => product.id < 6000)
    .sort((a, b) => (a.name > b.name ? 1 : b.name > a.name ? -1 : 0))
    .map(product => {
      return (
        <div key={product.id} className='mini-cart__product-row'>
          <img
            src={product.image}
            height='40px'
            width='40px'
            alt='Product in minicart'
          />
          <span>{product.name}</span>
          <span>
            {product.specialPrice ? product.specialPrice : product.price}
          </span>
          <div>X</div>
        </div>
      );
    });

  return <div className='mini-cart__container'>{miniCartProductList}</div>;
};

export default MiniCart;
