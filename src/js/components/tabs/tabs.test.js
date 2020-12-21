import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import {store, noop} from '../../test-mock/test-mocks';
import {Tabs} from './tabs';

it(`Should Tabs component render correctly`, () => {
  const tree = renderer
    .create((
      <Provider store={store}>
        <Tabs
          onUserFormSubmit={noop}
          redirect={noop}
          onFormSubmit={noop}
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
