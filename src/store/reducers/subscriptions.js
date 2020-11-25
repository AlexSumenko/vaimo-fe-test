import * as actionTypes from '../actions/actionTypes';

const initialState = {
  subscribers: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_SUBSCRIPTION:
      const newSubscribers = [...state.subscribers, action.subscriberEmail];
      return { ...state, newSubscribers };
    default:
      return state;
  }
};

export default reducer;
