import * as actionTypes from './actionTypes';
import { httpRequest } from '../../utils/fetch';

const saveProductsToStore = products => {
  return {
    type: actionTypes.getProducts,
    products: products,
  };
};

export const getProducts = () => {
  return dispatch => {
    httpRequest('products.json', 'GET')
      .then(res => {
        const fetchedProducts = [];
        for (let key in res) {
          fetchedProducts.push({ ...res[key] });
        }
        dispatch(saveProductsToStore(fetchedProducts));
      })
      .catch(err => console.log(err));
  };
};
