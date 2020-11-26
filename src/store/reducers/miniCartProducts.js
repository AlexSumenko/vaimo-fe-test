import * as actionTypes from '../actions/actionTypes';

const initialState = {
  miniCartProducts: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_MINICART_PRODUCTS:
      return { ...state, miniCartProducts: action.miniCartProducts };
    case actionTypes.ADD_MINICART_PRODUCT:
      const addedMiniCartProducts = [...state.miniCartProducts, action.product];
      return { ...state, miniCartProducts: addedMiniCartProducts };
    case actionTypes.DELETE_MINICART_PRODUCT:
      const newMiniCartProducts = [...state.miniCartProducts].filter(
        product => product.backendId !== action.productId
      );
      return {
        ...state,
        miniCartProducts: newMiniCartProducts,
      };
    case actionTypes.CLEAR_MINICART_PRODUCTS_FROM_STORE:
      return { ...state, miniCartProducts: action.miniCartProducts };
    default:
      return state;
  }
};

export default reducer;
