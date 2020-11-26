import * as actionTypes from './actionTypes';
import { httpRequest } from '../../utils/fetch';
import { convertObjectToArray } from '../../utils/helpers';

const saveMiniCartProductsToStore = miniCartProducts => {
  return {
    type: actionTypes.GET_MINICART_PRODUCTS,
    miniCartProducts: miniCartProducts,
  };
};

const removeMiniCartProductFromStore = productId => {
  return {
    type: actionTypes.DELETE_MINICART_PRODUCT,
    productId: productId,
  };
};

const addMiniCartProductToStore = product => {
  return {
    type: actionTypes.ADD_MINICART_PRODUCT,
    product: product,
  };
};

export const getMiniCartProducts = () => {
  return dispatch => {
    httpRequest('miniCartProducts.json', 'GET')
      .then(res => {
        const fetchedMiniCartProducts = convertObjectToArray(res);
        dispatch(saveMiniCartProductsToStore(fetchedMiniCartProducts));
      })
      .catch(err => console.log(err));
  };
};

export const deleteMiniCartProduct = productid => {
  return dispatch => {
    httpRequest(`/miniCartProducts/${productid}.json`, 'DELETE');
    dispatch(removeMiniCartProductFromStore(productid));
  };
};

export const addMiniCartProduct = product => {
  return dispatch => {
    httpRequest('/miniCartProducts.json', 'POST', product);
    dispatch(addMiniCartProductToStore(product));
  };
};

export const clearMiniCartProductsFromStore = () => {
  return {
    type: actionTypes.CLEAR_MINICART_PRODUCTS_FROM_STORE,
    miniCartProducts: [],
  };
};
