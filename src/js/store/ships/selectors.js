import {createSelector} from 'reselect';
import {FilterSettings} from '../../utils/const';
import NameSpace from '../name-space';

const SHIPS = NameSpace.SHIPS;

const getShipsList = (state) => {
  return state[SHIPS].shipsList;
};

const getShipById = (state, id) => {
  return getShipsList(state).find((it) => {
    return it.id === id;
  });
};

const getCardCount = (state) => {
  return state[SHIPS].cardCount;
};

const getActiveRace = (state) => {
  return state[SHIPS].activeRace;
};

const getActiveSort = (state) => {
  return state[SHIPS].activeSort;
};

const setCartList = createSelector(
    getShipsList,
    (list) => {
      return list.filter((it) => it.isInCart);
    });

const getFilteredList = createSelector(
    getShipsList,
    getActiveRace,
    getActiveSort,
    (list, race, sort) => {
      list = race === FilterSettings.DEFAULT_VALUE ? list : list.filter((it) => {
        return it.race === race;
      });
      if (sort === `asc`) {
        return list.slice().sort((a, b) => a.price > b.price ? 1 : -1);
      } else if (sort === `des`) {
        return list.slice().sort((a, b) => a.price < b.price ? 1 : -1);
      }
      return list;
    }
);

export {getShipsList, getShipById, getCardCount, getActiveRace, getActiveSort, getFilteredList, setCartList};
