import React from 'react';
import renderer from 'react-test-renderer';
import {MemoryRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {shipsList, store, MAX_CARD_COUNT} from '../../test-mock/test-mocks';
import {Main} from './main';

it(`Should Main component render correctly`, () => {
  const tree = renderer
    .create((
      <Provider store={store}>
        <MemoryRouter>
          <Main
            filteredShipsList={shipsList}
            cardCount={MAX_CARD_COUNT}
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
