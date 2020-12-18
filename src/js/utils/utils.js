import {FilterSettings} from "./const";

export const findItemById = (id, list) => {
  return list.find((item) => {
    return item.id === Number(id);
  });
};

export const extend = (a, b) => {
  return Object.assign({}, a, b);
};

export const filterShipsByRace = (list, race) => {
  return race === FilterSettings.DEFAULT_VALUE ? list : list.filter((it) => {
    return it.race === race;
  });
};

const getRacesList = (list) => {
  return list.map((it) => {
    return it.race;
  });
};

export const getUniqueRaceList = (list) => {
  const genresList = getRacesList(list);
  const uniqueRacesList = Array.from(new Set(genresList)).sort().slice(0, FilterSettings.MAX_COUNT);
  return [FilterSettings.DEFAULT_VALUE, ...uniqueRacesList];
};

export const validateText = (text) => {
  return text.length !== 0;
};
