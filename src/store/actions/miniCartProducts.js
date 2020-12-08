import * as actionTypes from './actionTypes';
import { httpRequest } from '../../utils/fetch';
import { convertObjectToArray } from '../../utils/helpers';

const saveMiniCartProductsToStore = (miniCartProducts, backendKey) => {
  return {
    type: actionTypes.GET_MINICART_PRODUCTS,
    miniCartProducts: miniCartProducts,
    backendKey: backendKey,
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
        let backendKey;
        for (const key in res) {
          backendKey = key;
          res = res[key];
        }
        console.log(backendKey);
        const fetchedMiniCartProducts = convertObjectToArray(res);
        dispatch(
          saveMiniCartProductsToStore(fetchedMiniCartProducts, backendKey)
        );
      })
      .catch(err => console.log(err));
  };
};

export const deleteMiniCartProduct = (productId, backendKey) => {
  console.log(backendKey);
  return dispatch => {
    httpRequest(
      `/miniCartProducts/${backendKey}/${productId}.json`,
      'DELETE'
    ).then(res => dispatch(getMiniCartProducts()));
    // dispatch(removeMiniCartProductFromStore(productId));
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

const refreshMiniCartProductsInStore = products => {
  return {
    type: actionTypes.REFRESH_MINICART_PRODUCTS,
    miniCartProducts: products,
  };
};

export const refreshMiniCartProducts = products => {
  return dispatch => {
    httpRequest('/miniCartProducts.json', 'DELETE').then(res =>
      httpRequest('/miniCartProducts.json', 'POST', products)
    );

    dispatch(refreshMiniCartProductsInStore(products));
  };
};
