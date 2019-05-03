import React from 'react';
import Card from './Card';
import PropTypes from 'prop-types';

export default function Cards (props){

    return (
      <div className="cards-container">
        {props.cards.map((card, i)=>
          <Card key={i} card={card} />
        )}
      </div>
    )
  
}

Cards.propTypes = {
  cards: PropTypes.arrayOf(
      PropTypes.shape({
          tab: PropTypes.string.isRequired,
          headline: PropTypes.string.isRequired,
          img: PropTypes.string.isRequired,
          author: PropTypes.string.isRequired,
      })
  )
}

