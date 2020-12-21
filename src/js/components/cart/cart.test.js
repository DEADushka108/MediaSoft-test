import React from 'react';
import {Provider} from 'react-redux';
import {MemoryRouter} from 'react-router-dom';
import renderer from 'react-test-renderer';
import {noop, shipsList, store} from '../../test-mock/test-mocks';
import {Cart} from './cart';

it(`Should Cart component render correctly`, () => {
  const tree = renderer
    .create((
      <Provider store={store}>
        <MemoryRouter>
          <Cart
            shipsInCart={shipsList}
            redirect={noop}
            onCloseClick={noop}
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
