import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import {store, ship, noop} from '../../test-mock/test-mocks';
import {MemoryRouter} from 'react-router-dom';
import {SmallCard} from './small-card';

it(`Should SmallCard component render correctly`, () => {
  const tree = renderer
    .create((
      <Provider store={store}>
        <MemoryRouter>
          <SmallCard
            ship={ship}
            redirect={noop}
            onAddCartClick={noop}
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
