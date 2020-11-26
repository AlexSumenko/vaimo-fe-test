import * as actionTypes from '../actions/actionTypes';

const initialState = {
  products: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_PRODUCTS:
      return { ...state, products: action.products };
    case actionTypes.CLEAR_PRODUCTS_FROM_STORE:
      return { ...state, products: action.products };
    default:
      return state;
  }
};

export default reducer;
