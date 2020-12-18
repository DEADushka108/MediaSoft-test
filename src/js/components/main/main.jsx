import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import Header from '../header/header';
import Footer from '../footer/footer';
import ShipsList from '../ships-list/ships-list';
import ShowMoreButton from '../show-more-button/show-more-button';
import {getActiveRace, getCardCount, getFilteredList, getShipsList} from '../../store/ships/selectors';
import {connect} from 'react-redux';
import RaceList from '../race-list/race-list';
import SortList from '../sort-list/sort-list';
import {shipDetails} from '../../types/ships';

const Main = (props) => {
  const {filteredShipsList, cardCount} = props;

  return <Fragment>
    <Header/>
    <main className="page-main">
      <div className="page-main__wrapper">
        <h1 className="visually-hidden">Главная страница тестового задания</h1>
        <div className="page-content">
          <section className="catalog">
            <h2 className="catalog__title visually-hidden">Catalog</h2>
            <div className="catalog__wrapper">
              <RaceList/>
              <SortList/>
            </div>
            <ShipsList ships={filteredShipsList} count={cardCount}/>
            <div className="catalog__more">
              <ShowMoreButton list={filteredShipsList} count={cardCount}/>
            </div>
          </section>
        </div>
      </div>
    </main>

    <Footer/>

  </Fragment>;
};

Main.propTypes = {
  filteredShipsList: PropTypes.arrayOf(shipDetails).isRequired,
  activeRace: PropTypes.string.isRequired,
  cardCount: PropTypes.number.isRequired,
  shipsList: PropTypes.arrayOf(shipDetails).isRequired,
};

const mapStateToProps = (state) => ({
  filteredShipsList: getFilteredList(state),
  activeRace: getActiveRace(state),
  cardCount: getCardCount(state),
  shipsList: getShipsList(state),
});

export {Main};
export default connect(mapStateToProps)(Main);
