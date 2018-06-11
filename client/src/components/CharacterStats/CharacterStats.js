import React, { Component } from 'react';
import './CharacterStats.css';
import './CharacterEquipment.css';
import './ToolTip.css'

class CharacterStats extends Component {

  constructor(props) {
    super(props);
    this.state = {
      userData: this.props.userData,
      characterInfo: this.props.characterInfo,
      characterClass: null
    }
  }

  componentDidMount() {
    switch(this.state.characterInfo.classID) {
      case 1:
        this.setState({ characterClass: 'Knight' });
        break;
      case 2:
        this.setState({ characterClass: 'Wizard' });
        break;
      case 3:
        this.setState({ characterClass: 'Archer' });
        break;
      default:
        break;
    }
  }

  render() {
    return(
      <div className="CharacterStats">
        <div className="CharacterStats-header">
          <h1 className="CharacterStats-PlayerName">{this.state.characterInfo.characterName}</h1>
          <h3 className="PlayerLevel">Level: {this.state.characterInfo.lvl} {this.state.characterClass}</h3>
        </div>
        <div className="CharacterEquipment-container">
          <div className="CharacterEquipment-left">
            <div className="HeadSlot"><span className="HeadSlot-tooltiptext">Empty Head Slot</span></div>
            <div className="NeckSlot"><span className="NeckSlot-tooltiptext">Empty Neck Slot</span></div>
            <div className="BackSlot"><span className="BackSlot-tooltiptext">Empty Back Slot</span></div>
            <div className="HandSlot"><span className="HandSlot-tooltiptext">Empty Hand Slot</span></div>
            <div className="WristSlot"><span className="WristSlot-tooltiptext">Empty Wrist Slot</span></div>
            <div className="PantsSlot"><span className="PantsSlot-tooltiptext">Empty Pants Slot</span></div>
          </div>


          <div className={`${this.state.characterClass}-Silhouette`} />

          <div className="CharacterEquipment-right">
            <div className="FeetSlot" />
            <div className="RingOneSlot" />
            <div className="RingTwoSlot" />
            <div className="TrinketOneSlot" />
            <div className="TrinketTwoSlot" />
            <div className="ArtifactSlot" />
          </div>
        </div>

        <div className="CharacterStats-container">
          <div className="CharacterStats-contents">
            {/* <h2 className="PlayerName">Character Name: {this.state.characterInfo.characterName}</h2>
            <h3 className="PlayerLevel">Level: {this.state.characterInfo.lvl}</h3> */}
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
