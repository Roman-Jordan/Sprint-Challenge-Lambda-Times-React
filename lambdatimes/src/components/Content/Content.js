import React, { Component } from 'react';

import Tabs from './Tabs';
import Cards from './Cards';

// Importing our tab and card data. No need to change anything here.
import { tabData, cardData } from '../../data';

export default class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 'all',
      tabs: [],
      cards: []
    };
  }

  componentDidMount() {
    this.setState({
      tabs: tabData,
      cards: cardData
    })
  }

  changeSelected = e => {
    e.preventDefault();
    this.setState({
      selected: e.target.id
    })
  };

  filterCards = () => {
    let filteredCards = this.state.cards.filter(card =>{
      return card.tab === this.state.selected ? card:false
    });
    filteredCards = filteredCards.length > 0 ? filteredCards:this.state.cards
    return filteredCards;
  };

  render() {
    return (
      <div className="content-container">
        <Tabs tabs={this.state.tabs} current={this.state.selected} tabSelected={this.changeSelected}/>
        <Cards cards={this.filterCards()} />
      </div>
    );
  }
}
