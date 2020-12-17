import React from 'react';
import PropTypes from 'prop-types';

const Tab = (props) => {
  console.log(props);
  const {children} = props;
  console.log(children);

  return <React.Fragment>{children}</React.Fragment>;
};

Tab.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired
};

export default Tab;
