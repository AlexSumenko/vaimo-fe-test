import * as actionTypes from '../actions/actionTypes';

const initialState = {
  categories: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_CATEGORIES:
      return { ...state, categories: action.categories };
    default:
      return state;
  }
};

export default reducer;
