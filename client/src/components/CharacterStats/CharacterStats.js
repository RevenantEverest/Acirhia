import React, { Component } from 'react';
import './CharacterStats.css';
import './CharacterEquipment.css';

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
        <div className="CharacterEquipment-container">
          <div className="HeadSlot" />
          <div className="NeckSlot" />
          <div className="BackSlot" />
          <div className="HandSlot" />
          <div className="WristSlot" />
          <div className="PantsSlot" />

          <div className="CharacterSilhouette" />

          <div className="FeetSlot" />
          <div className="RingOneSlot" />
          <div className="RingTwoSlot" />
          <div className="TrinketOneSlot" />
          <div className="TrinketTwoSlot" />
          <div className="ArtifactSlot" />
        </div>

        <div className="CharacterStats-container">
          <div className="CharacterStats-contents">
            <h2 className="PlayerName">Character Name: {this.state.characterInfo.characterName}</h2>
            <h3 className="PlayerLevel">Level: {this.state.characterInfo.lvl}</h3>
            <div className="PlayerStats-container">
              <div className="PlayerAttack-container">
                <h3 className="PlayerDefense">Attack: {this.state.characterInfo.attack}</h3>
              </div>
              <div className="PlayerDefense-container">
                <h3 className="PlayerDefense">Defense: {this.state.characterInfo.defense}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default CharacterStats;
