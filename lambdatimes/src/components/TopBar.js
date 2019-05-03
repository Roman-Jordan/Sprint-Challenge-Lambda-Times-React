import React from 'react';
import {DivTopBar} from './StyledJS';
import {DivTopBarLeft} from './StyledJS';
import {DivTopBarCenter} from './StyledJS';
import {DivTopBarRight} from './StyledJS';

// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file

const TopBar = () => {
  return (
    <DivTopBar>
      <div >
        <DivTopBarLeft >
          <span>TOPICS</span><span>SEARCH</span>
        </DivTopBarLeft>
        <DivTopBarCenter>
          <span>GENERAL</span><span>BROWNBAG</span><span>RANDOM</span><span>MUSIC</span><span>ANNOUNCEMENTS</span>
        </DivTopBarCenter>
        <DivTopBarRight >
          <span>LOG IN</span>
        </DivTopBarRight>
      </div>
    </DivTopBar>
  )
}

export default TopBar;