import * as actionTypes from './actionTypes';
import { httpRequest } from '../../utils/fetch';
import { convertObjectToArray } from '../../utils/helpers';

const saveCategoriesToStore = categories => {
  return {
    type: actionTypes.GET_CATEGORIES,
    categories: categories,
  };
};

export const getCategories = () => {
  return dispatch => {
    httpRequest('categories.json', 'GET')
      .then(res => {
        const fetchedCategories = convertObjectToArray(res);
        dispatch(saveCategoriesToStore(fetchedCategories));
      })
      .catch(err => console.log(err));
  };
};

export const clearCategoriesFromStore = () => {
  return {
    type: actionTypes.CLEAR_CATEGORIES_FROM_STORE,
    categories: [],
  };
};
