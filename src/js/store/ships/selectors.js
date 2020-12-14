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

const getFilteredList = createSelector(
  getShipsList,
  getActiveRace,
  (list, race) => {
    return race === FilterSettings.DEFAULT_VALUE ? list : list.filter((it) => {
      return it.race === race;
    });
  }
);

export {getShipsList, getShipById, getCardCount, getActiveRace, getFilteredList}
