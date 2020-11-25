import * as actionTypes from './actionTypes';
import { httpRequest } from '../../utils/fetch';

const addSubscriberEmailToStore = subscriberEmail => {
  return {
    type: actionTypes.ADD_SUBSCRIPTION,
    subscriberEmail: subscriberEmail,
  };
};

export const addSubscriber = subscriberEmail => {
  return dispatch => {
    httpRequest('subscribers.json', 'POST', subscriberEmail);
    dispatch(addSubscriberEmailToStore(subscriberEmail));
  };
};
