import React from 'react';
import {configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {MemoryRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {noop, shipsList, store} from '../../test-mock/test-mocks';
import {Cart} from './cart';

configure({
  adapter: new Adapter(),
});

const onCloseClick = jest.fn();

it(`Should call onCloseClick handler correctly`, () => {
  const cart = mount(
      <Provider store={store}>
        <MemoryRouter>
          <Cart
            shipsInCart={shipsList}
            onCloseClick={onCloseClick}
            redirect={noop}
          />
        </MemoryRouter>
      </Provider>
  );
  const button = cart.find(`button.cart__close-button`).at(1);

  button.simulate(`click`);
  expect(onCloseClick).toHaveBeenCalledTimes(1);
  expect(onCloseClick).toHaveBeenCalledWith(shipsList[1]);
});
