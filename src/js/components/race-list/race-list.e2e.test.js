import React from 'react';
import {configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {Provider} from 'react-redux';
import {FilterSettings, shipsList, store} from '../../test-mock/test-mocks';
import {RaceList} from './race-list';

configure({
  adapter: new Adapter(),
});

const onRaceClick = jest.fn();

it(`Should call onRaceClick handler with correct data`, () => {
  const raceList = mount(
      <Provider store={store}>
        <RaceList
          shipsList={shipsList}
          currentRace={FilterSettings.DEFAULT_VALUE}
          onRaceClick={onRaceClick}
        />
      </Provider>
  );
  const secondRace = raceList.find(`li.catalog__race-item`).at(1);

  secondRace.simulate(`click`);
  expect(onRaceClick).toHaveBeenCalledTimes(1);
  expect(onRaceClick).toHaveBeenCalledWith(`Alien`);
});
