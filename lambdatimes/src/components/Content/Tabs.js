import React from 'react';
import Tab from './Tab';
import PropTypes from 'prop-types';

const Tabs = props => {
  return (
    <div className="tabs">
      <div className="topics">
        <span className="title">TRENDING TOPICS:</span>
        {
          props.tabs.map((tab,i) =>
            <Tab key={i} tab={tab} current={props.current} tabSelected={props.tabSelected}/>
          )
        }
      </div>
    </div>
  );
};

Tabs.propTypes = {
  tabs: PropTypes.array.isRequired,
  current:PropTypes.string.isRequired,
  tabSelected:PropTypes.func.isRequired
}


// Make sure to use PropTypes to validate your types!
export default Tabs;

