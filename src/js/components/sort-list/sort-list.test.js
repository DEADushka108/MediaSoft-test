import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import {store, noop} from '../../test-mock/test-mocks';
import {SortList} from './sort-list';


it(`Should SortList component render correctly`, () => {
  const tree = renderer
    .create((
      <Provider store={store}>
        <SortList
          currentSort={``}
          onSortClick={noop}
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
