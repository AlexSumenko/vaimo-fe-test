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
        const fetchedProducts = convertObjectToArray(res).sort((a, b) =>
          a.name > b.name ? 1 : b.name > a.name ? -1 : 0
        );
        dispatch(saveProductsToStore(fetchedProducts));
      })
      .catch(err => console.log(err));
  };
};

export const clearProductsFromStore = () => {
  return {
    type: actionTypes.CLEAR_PRODUCTS_FROM_STORE,
    products: [],
  };
};
