import * as actionTypes from './actionTypes';
import { httpRequest } from '../../utils/fetch';
import { convertObjectToArray } from '../../utils/helpers';

const saveProductsToStore = products => {
  return {
    type: actionTypes.GET_PRODUCTS,
    products: products,
  };
};

export const getProducts = () => {
  return dispatch => {
    httpRequest('products.json', 'GET')
      .then(res => {
        const fetchedProducts = convertObjectToArray(res);
        dispatch(saveProductsToStore(fetchedProducts));
      })
      .catch(err => console.log(err));
  };
};
