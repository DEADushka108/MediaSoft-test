import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {ActionCreator} from '../../store/ships/ships';
import {connect} from 'react-redux';
import {getActiveSort} from '../../store/ships/selectors';

const SortList = (props) => {
  const {currentSort, onSortClick} = props;
  const [activeSort, setActiveSort] = useState(currentSort);

  return <ul className="catalog__sort-list">
    <li className={`catalog__sort-item ${(activeSort === `asc`) ? `catalog__sort-item--active` : ``}`} onClick={() => {
      setActiveSort(`asc`);
      onSortClick(`asc`);
    }}>
      <a className="catalog__sort-link">
        <svg className="catalog__sort-icon">
          <use xlinkHref="#sort-up"></use>
        </svg>
        <span className="visually-hidden">Ascending</span>
      </a>
    </li>
    <li className={`catalog__sort-item ${(activeSort === `des`) ? `catalog__sort-item--active` : ``}`} onClick={() => {
      setActiveSort(`des`);
      onSortClick(`des`);
    }}>
      <a className="catalog__sort-link">
        <svg className="catalog__sort-icon">
          <use xlinkHref="#sort-down"></use>
        </svg>
        <span className="visually-hidden">Descending</span>
      </a>
    </li>
    <li className="catalog__sort-item" onClick={() => {
      setActiveSort(``);
      onSortClick(``);
    }}>
      <a className="catalog__sort-link">
        <svg className="catalog__sort-icon">
          <use xlinkHref="#refresh"></use>
        </svg>
        <span className="visually-hidden">Refresh</span>
      </a>
    </li>
  </ul>;
};

SortList.propTypes = {
  currentSort: PropTypes.string,
  onSortClick: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  currentSort: getActiveSort(state),
});

const mapDispatchToProps = (dispatch) => ({
  onSortClick(sort) {
    dispatch(ActionCreator.setActiveSort(sort));
  }
});

export {SortList};
export default connect(mapStateToProps, mapDispatchToProps)(SortList);
