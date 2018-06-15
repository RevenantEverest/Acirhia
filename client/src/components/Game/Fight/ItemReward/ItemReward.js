import React, { Component } from 'react';
import './ItemReward.css';

class ItemReward extends Component {

  constructor(props) {
    super(props);
    this.state = {
      rewardInfo: this.props.rewards
    }
  }

  render() {
    return(
      <div className="ItemReward">
        <h3 className="ItemReward-item">{this.state.rewardInfo.item.itemName}</h3>
        <h3 className="ItemReward-exp">Exp Gained: {this.state.rewardInfo.exp}</h3>
        <h3 className="ItemReward-gold">Gold: {this.state.rewardInfo.gold}</h3>
      </div>
    );
  }
};

export default ItemReward;
