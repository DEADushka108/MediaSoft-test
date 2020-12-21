import React from 'react';
import {configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {Provider} from 'react-redux';
import {store} from '../../test-mock/test-mocks';
import {SortList} from './sort-list';


configure({
  adapter: new Adapter(),
});

const onSortClick = jest.fn();

it(`Should call onSortClick handler with correct data`, () => {
  const sortList = mount(
      <Provider store={store}>
        <SortList
          currentSort={``}
          onSortClick={onSortClick}
        />
      </Provider>
  );
  const secondRace = sortList.find(`li.catalog__sort-item`).at(1);

  secondRace.simulate(`click`);
  expect(onSortClick).toHaveBeenCalledTimes(1);
  expect(onSortClick).toHaveBeenCalledWith(`des`);
});
