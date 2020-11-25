import * as actionTypes from './actionTypes';
import { httpRequest } from '../../utils/fetch';

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
        const fetchedCategories = [];
        for (let key in res) {
          fetchedCategories.push({ ...res[key] });
        }
        dispatch(saveCategoriesToStore(fetchedCategories));
      })
      .catch(err => console.log(err));
  };
};
