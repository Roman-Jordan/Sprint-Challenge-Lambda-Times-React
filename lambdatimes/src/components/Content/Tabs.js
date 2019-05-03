import React from 'react';
import Tab from './Tab';
import { tabData } from '../../data';
const Tabs = props => {
  return (
    <div className="tabs">
      <div className="topics">
        <span className="title">TRENDING TOPICS:</span>
        {
          tabData.map((tab,i) =>
            <Tab key={i} tab={tab} />
          )
        }
      </div>
    </div>
  );
};

// Make sure to use PropTypes to validate your types!
export default Tabs;
