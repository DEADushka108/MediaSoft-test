import {extend} from '../../utils/utils';

const initialState = {
  userInfo: {},
  address: {},
};

const ActionType = {
  SET_USER_INFO: `SET_USER_INFO`,
  SET_DELIVERY_ADDRESS: `SET_DELIVERY_ADDRESS`
};

const ActionCreator = {
  setUserInfo: (userData) => ({
    type: ActionType.SET_USER_INFO,
    payload: userData,
  }),
  setDeliveryAddress: (address) => ({
    type: ActionType.SET_DELIVERY_ADDRESS,
    payload: address,
  })
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_USER_INFO:
      return extend(state, {
        userInfo: action.payload,
      });
    case ActionType.SET_DELIVERY_ADDRESS:
      return extend(state, {
        address: action.payload,
      });
  }
  return state;
};

export {reducer, ActionCreator, ActionType};
