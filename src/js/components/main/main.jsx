import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Header from '../header/header';
import Footer from '../footer/footer';
import ShipsList from '../ships-list/ships-list';
import ShowMoreButton from '../show-more-button/show-more-button';
import { getActiveRace, getCardCount, getFilteredList, getShipsList } from '../../store/ships/selectors';
import { connect } from 'react-redux';

const Main = (props) => {
  const {filteredShipsList, activeRace, cardCount, shipsList} = props;

  return <Fragment>
    <Header/>
    <main className="page-main">
      <div className="page-main__wrapper">
        <h1 className="visually-hidden">Главная страница тестового задания</h1>
        <div className="page-content">
          <section className="catalog">
            <h2 className="catalog__title visually-hidden">Catalog</h2>
            <ShipsList ships={filteredShipsList} count={cardCount}/>
            <div className="catalog__more">
              <ShowMoreButton list={shipsList} count={cardCount}/>
            </div>
          </section>
        </div>
      </div>
    </main>

    <Footer/>

  </Fragment>
};

Main.propTypes = {};

const mapStateToProps = (state) => ({
  filteredShipsList: getFilteredList(state),
  activeRace: getActiveRace(state),
  cardCount: getCardCount(state),
  shipsList: getShipsList(state),
});

export {Main};
export default connect(mapStateToProps)(Main);
