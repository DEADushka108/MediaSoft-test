import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { setCartList } from '../../store/ships/selectors';
import { AppRoute } from '../../utils/const';
import PropTypes from 'prop-types';

const Header = (props) => {
  const {shipsList} = props;

  return (
    <header className="page-header">
      <div className="page-header__wrapper">
        <Link to={AppRoute.ROOT} className="page-header__logo">
          Starshipsshop
        </Link>
        <nav className="main-nav">
          <ul className="main-nav__list">
            <li className="main-nav__item">
              <Link to={AppRoute.ROOT} className="main-nav__link main-nav__link--active">
                <svg className="main-nav__icon">
                  <use xlinkHref="#home-page"></use>
                </svg>
                <span className="main-nav__text">Shop</span>
              </Link>
            </li>
            <li className="main-nav__item">
              <Link to={AppRoute.CONTACT} className="main-nav__link">
              <svg className="main-nav__icon">
                  <use xlinkHref="#social-group"></use>
              </svg>
              <span className="main-nav__text">Contact</span>
              </Link>
            </li>
            <li className="main-nav__item">
              <Link to={AppRoute.CART} className="main-nav__link">
              <svg className="main-nav__icon">
                  <use xlinkHref="#shopping-cart"></use>
                </svg>
                <span className="main-nav__text">Cart</span>
                <span className="main-nav__sub">{shipsList.length}</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

Header.propTypes = {};

const mapStateToProps = (state) => ({
  shipsList: setCartList(state),
})

export {Header}
export default connect(mapStateToProps)(Header);