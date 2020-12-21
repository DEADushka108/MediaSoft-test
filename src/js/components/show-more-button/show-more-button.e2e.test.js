import React from 'react';
import {configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {Provider} from 'react-redux';
import {shipsList, store} from '../../test-mock/test-mocks';
import {ShowMoreButton} from './show-more-button';

configure({
  adapter: new Adapter(),
});

const onClick = jest.fn();

it(`Should call onClick handler correctly`, () => {
  const showMoreButton = mount(
      <Provider store={store}>
        <ShowMoreButton
          list={shipsList}
          count={2}
          onClick={onClick}
        />
      </Provider>
  );
  const button = showMoreButton.find(`button.catalog__button`);

  button.simulate(`click`);
  expect(onClick).toHaveBeenCalledTimes(1);
});
