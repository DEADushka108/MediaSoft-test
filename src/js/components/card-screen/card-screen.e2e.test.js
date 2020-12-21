import React from 'react';
import {configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {MemoryRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {ship, store} from '../../test-mock/test-mocks';
import {CardScreen} from './card-screen';

configure({
  adapter: new Adapter(),
});

const onAddCartClick = jest.fn();

it(`Should call onAddCartClick handler with correct data`, () => {
  const cardScreen = mount(
      <Provider store={store}>
        <MemoryRouter>
          <CardScreen
            ship={ship}
            onAddCartClick={onAddCartClick}
          />
        </MemoryRouter>
      </Provider>
  );
  const button = cardScreen.find(`button.ship-card__button`);

  button.simulate(`click`);
  expect(onAddCartClick).toHaveBeenCalledTimes(1);
  expect(onAddCartClick).toHaveBeenCalledWith(ship);
});
