import React from 'react';

const Tab = props => {
      let className = '';
      props.current === props.tab ? className += 'active':false;
  return (
    <div
      id={props.tab}
      className={className}
      onClick={props.tabSelected}
    >
      {props.tab.toUpperCase()}
    </div>
  );
};

// Make sure you include PropTypes on your props.

export default Tab;
