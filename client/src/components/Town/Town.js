import React, { Component } from 'react';
import './Town.css';

class Town extends Component {

  render() {
    return(
      <div className="Town">
        <button className="Town-chooseCharacter" onClick={(e) => this.props.renderChooseCharacter()}>Choose Character</button>
        <button className="Town-shop" onClick={(e) => this.props.renderShop()}>Shop</button>
        <button className="Town-fight" onClick={(e) => this.props.renderFight()}>Fight</button>
        <button className="Town-arena" onClick={(e) => this.props.renderArena()}>Arena</button>
      </div>
    );
  }
};

export default Town;
