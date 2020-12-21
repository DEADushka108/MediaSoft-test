import configureStore from 'redux-mock-store';
import {FilterSettings, MAX_CARD_COUNT} from '../const/const';
import {shipsList} from '../ships/ships';

const NameSpace = {
  SHIPS: `SHIPS`,
  USER: `USER`,
};

const noop = () => {};

const mockStore = configureStore();

const store = mockStore({
  [NameSpace.SHIPS]: {
    shipsList,
    activeRace: FilterSettings.DEFAULT_VALUE,
    cardCount: MAX_CARD_COUNT,
    activeSort: ``,
  },
  [NameSpace.USER]: {
    userInfo: {},
    address: {},
  },
});

export {store, noop};
