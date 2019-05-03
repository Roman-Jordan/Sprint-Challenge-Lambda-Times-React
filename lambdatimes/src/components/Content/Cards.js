import React, { Component } from 'react';
import {cardData} from '../../data';
import Card from './Card';

export default class Cards extends Component{
  state = {
    cards:[]
  }
  componentDidMount(){
    this.setState({
      cards: cardData
    })
  }

  render(){
    return (
      <div className="cards-container">
        {this.state.cards.map((card, i)=>
          <Card key={i} card={card} />
        )}
      </div>
    )
  }
}

// Make sure you include prop types for all of your incoming props
