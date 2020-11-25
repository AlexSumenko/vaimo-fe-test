import * as actionTypes from '../actions/actionTypes';

const initialState = {
  miniCartProducts: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_MINICART_PRODUCTS:
      return { ...state, miniCartProducts: action.miniCartProducts };
    case actionTypes.ADD_MINICART_PRODUCT:
      return { ...state, miniCartProducts: action.miniCartProducts };
    case actionTypes.DELETE_MINICART_PRODUCT:
      return { ...state, miniCartProducts: action.miniCartProducts };
    default:
      return state;
  }
};

export default reducer;
