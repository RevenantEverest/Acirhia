import React, { Component } from 'react';
import './CharacterStats.css';

class CharacterStats extends Component {

  constructor(props) {
    super(props);
    this.state = {
      userData: this.props.userData,
      characterInfo: this.props.characterInfo
    }
  }

  render() {
    return(
      <div className="CharacterStats">
        <div className="PlayerAvatar">
          <div className={`${this.state.playerClass}-idle`} />
        </div>
        <h1 className="PlayerName">{this.state.characterInfo.characterName}</h1>
        <h3 className="PlayerLevel">Level: {this.state.characterInfo.lvl}</h3>
        <div className="PlayerStats-container">
          <div className="PlayerHealth-container">
            <h1 className="PlayerDefense">Health: {this.state.characterInfo.health}</h1>
          </div>
          <div className="PlayerAttack-container">
            <h1 className="PlayerDefense">Attack: {this.state.characterInfo.attack}</h1>
          </div>
          <div className="PlayerDefense-container">
            <h1 className="PlayerDefense">Defense: {this.state.characterInfo.defense}</h1>
          </div>
        </div>
      </div>
    );
  }
};

export default CharacterStats;
