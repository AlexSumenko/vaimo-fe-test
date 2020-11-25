import * as actionTypes from './actionTypes';
import { httpRequest } from '../../utils/fetch';

const saveMiniCartProductsToStore = miniCartProducts => {
  return {
    type: actionTypes.GET_MINICART_PRODUCTS,
    miniCartProducts: miniCartProducts,
  };
};

export const getMiniCartProducts = () => {
  return dispatch => {
    httpRequest('miniCartProducts.json', 'GET')
      .then(res => {
        const fetchedMiniCartProducts = [];
        for (let key in res) {
          fetchedMiniCartProducts.push({ ...res[key], backendId: key });
        }
        dispatch(saveMiniCartProductsToStore(fetchedMiniCartProducts));
      })
      .catch(err => console.log(err));
  };
};
