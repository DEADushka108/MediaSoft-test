import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import App from './app';
import {store} from '../../test-mock/test-mocks';

it(`Should render App component correctly`, () => {
  const tree = renderer
    .create((
      <Provider store={store}>
        <App/>
      </Provider>
    ), {
      createNodeMock() {
        return {};
      }
    })
    .toJSON();

  expect(tree).toMatchSnapshot();
});
