import React from 'react';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../utils/const';
// import PropTypes from 'prop-types';

const Header = () => {
  return (
    <header className="page-header page-header--active">
      <div className="page-header__wrapper">
        <Link to={AppRoute.ROOT} className="page-header__logo">
          Starshipsshop
        </Link>
        <nav className="main-nav">
          <ul className="main-nav__list main-nav__list--open">
            <li className="main-nav__item">
              <Link to={AppRoute.ROOT} className="main-nav__link main-nav__link--active">Shop</Link>
            </li>
            <li className="main-nav__item">
              <Link to={AppRoute.CONTACT} className="main-nav__link">Contact</Link>
            </li>
            <li className="main-nav__item">
              <Link to={AppRoute.CART} className="main-nav__link">Cart <span className="main-nav__sub">1</span></Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;