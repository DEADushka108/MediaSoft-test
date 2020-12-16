import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {TabNames} from '../../utils/const.js';

const Tabs = (props) => {
  const [activeItem, setActiveItem] = useState(TabNames.USER);
  const {children} = props;

  return <div className="delivery">
    <nav className="delivery__nav">
      <ul className="delivery__list">
        {children.map((child, index) => {
          const {title} = child.props;
          return <li key={`${title}-${index}`}
            className={`delivery__item ${(activeItem === title) ? `delivery__item--active` : ``}`}
            onClick={() => {
              setActiveItem(title);
            }}>
            <a className="delivery__link">{title}</a>
          </li>;
        })}
      </ul>
    </nav>
    {children.map((child) => {
      const {title, children: content} = child.props;

      return (title === activeItem) ? content : null;
    })}
  </div>;
};

Tabs.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Tabs;