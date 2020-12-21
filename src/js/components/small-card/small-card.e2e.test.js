import React from 'react';
import {configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {Provider} from 'react-redux';
import {MemoryRouter} from 'react-router-dom';
import {noop, ship, store} from '../../test-mock/test-mocks';
import {SmallCard} from './small-card';

configure({
  adapter: new Adapter(),
});

const onAddCartClick = jest.fn();

it(`Should call onAddCartClick handler correctly on small-card component`, () => {
  const smallCard = mount(
      <Provider store={store}>
        <MemoryRouter>
          <SmallCard
            ship={ship}
            redirect={noop}
            onAddCartClick={onAddCartClick}
          />
        </MemoryRouter>
      </Provider>
  );
  const button = smallCard.find(`button.small-card__button`);

  button.simulate(`click`);
  expect(onAddCartClick).toHaveBeenCalledTimes(1);
  expect(onAddCartClick).toHaveBeenCalledWith(ship);
});
