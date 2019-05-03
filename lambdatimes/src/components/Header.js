import React from 'react';

import { DivHeader } from './StyledJS'
// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file

const Header = () => {
  return (
    <DivHeader>
      <span >SMARCH 32, 2018</span>
      <h1>Lambda Times</h1>
      <span>98°</span>
    </DivHeader>
  )
}

export default Header