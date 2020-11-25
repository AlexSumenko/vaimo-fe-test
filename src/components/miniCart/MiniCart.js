import React from 'react';

import { DeleteIcon } from '../images/Images';
import { productListMock } from '../../assets/mock/ProductListMock';

import './MiniCart.scss';

const MiniCart = () => {
  const miniCartProductList = productListMock
    .filter(product => product.id < 6000)
    .sort((a, b) => (a.name > b.name ? 1 : b.name > a.name ? -1 : 0))
    .map(product => {
      return (
        <div key={product.id} className='mini-cart__product-row content-width'>
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

  return <div className='mini-cart__container'>{miniCartProductList}</div>;
};

export default MiniCart;
