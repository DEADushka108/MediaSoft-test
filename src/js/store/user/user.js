import {extend} from '../../utils/utils';

const initialState = {
  cartList: [],
};

const ActionType = {
  GET_CART_LIST: `GET_CART_LIST`,
};

const ActionCreator = {
  getCartList: (list) => ({
    type: ActionType.GET_CART_LIST,
    payload: list,
  }),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.GET_CART_LIST:
      return extend(state, {
        cartList: action.payload,
      })
  }
  return state;
}

export {reducer, ActionCreator, ActionType};
