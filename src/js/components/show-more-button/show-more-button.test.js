import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import {shipsList, store, noop, MAX_CARD_COUNT} from '../../test-mock/test-mocks';
import {ShowMoreButton} from './show-more-button';

it(`Should ShowMoreButton component render correctly`, () => {
  const tree = renderer
    .create((
      <Provider store={store}>
        <ShowMoreButton
          list={shipsList}
          count={MAX_CARD_COUNT}
          onClick={noop}
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

it(`Should not ShowMoreButton component render`, () => {
  const tree = renderer
    .create((
      <Provider store={store}>
        <ShowMoreButton
          list={shipsList}
          count={20}
          onClick={noop}
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
