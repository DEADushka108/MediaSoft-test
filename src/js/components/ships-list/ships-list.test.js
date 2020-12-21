import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import {shipsList, store, MAX_CARD_COUNT} from '../../test-mock/test-mocks';
import ShipsList from './ships-list';
import {MemoryRouter} from 'react-router-dom';

it(`Should ShipsList component render correctly`, () => {
  const tree = renderer
    .create((
      <Provider store={store}>
        <MemoryRouter>
          <ShipsList
            ships={shipsList}
            count={MAX_CARD_COUNT}
          />
        </MemoryRouter>
      </Provider>
    ), {
      createNodeMock() {
        return {};
      }
    })
    .toJSON();

  expect(tree).toMatchSnapshot();
});
