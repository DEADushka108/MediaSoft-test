import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import {shipsList, store, FilterSettings, noop} from '../../test-mock/test-mocks';
import {RaceList} from './race-list';

it(`Should RaceList component render correctly`, () => {
  const tree = renderer
    .create((
      <Provider store={store}>
        <RaceList
          shipsList={shipsList}
          currentRace={FilterSettings.DEFAULT_VALUE}
          onRaceClick={noop}
        />
      </Provider>
    ), {
      createNodeMock() {
        return {};
      }
    })
    .toJSON();

  expect(tree).toMatchSnapshot();
});
