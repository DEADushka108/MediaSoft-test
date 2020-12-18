import {createSelector} from 'reselect';
import NameSpace from '../name-space';

const getCartList = (state) => {
  return state[NameSpace.USER].cartList;
};

const getCartCount = createSelector(
    getCartList,
    (list) => {
      return list.length;
    }
);

export {getCartCount, getCartList};
