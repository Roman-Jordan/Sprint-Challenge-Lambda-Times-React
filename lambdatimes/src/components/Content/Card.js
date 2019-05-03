import React from 'react';
import PropTypes from 'prop-types';

export default function Card(props){
  return (
    <div className="card" data-tab={props.card.tab}>
      <div className="headline">{props.card.headline}</div>
      <div className="author">
        <div className="img-container">
          <img src={props.card.img} alt="PUPPIES"/>
        </div>
        <span>By {props.card.author}</span>
      </div>
    </div>
  );
};

Card.propTypes = {
  card:PropTypes.shape({
      tab: PropTypes.string.isRequired,
      headline: PropTypes.string.isRequired,
      img: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
  })
}





