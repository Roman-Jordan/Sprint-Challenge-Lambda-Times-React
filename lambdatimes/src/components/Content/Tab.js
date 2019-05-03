import React from 'react';
import PropTypes from 'prop-types';
const Tab = props => {
      let className = '';
      className = props.current === props.tab ? className += 'active':false;
  return (
    <div
      id={props.tab}
      className={`tab ${className}`}
      onClick={props.tabSelected}
    >
      {props.tab.toUpperCase()}
    </div>
  );
};

Tab.propTypes = {
  tab: PropTypes.string.isRequired,
  current:PropTypes.string.isRequired,
  tabSelected:PropTypes.func.isRequired
}

// Make sure you include PropTypes on your props.

export default Tab;
