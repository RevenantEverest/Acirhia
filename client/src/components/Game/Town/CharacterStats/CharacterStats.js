import React, { Component } from 'react';
import './CharacterStats.css';
import './CharacterEquipment.css';
import './ToolTip.css'

//Services Imports
import characterServices from '../../../../services/characterServices';

//Component Imports
import Equipment from './Equipment/Equipment';

class CharacterStats extends Component {

  constructor(props) {
    super(props);
    this.state = {
      userData: this.props.userData,
      characterId: this.props.characterId,
      characterClass: null,

      equiped: null
    }
  }

  componentDidMount() {
    characterServices.getCharacterInfo(this.props.characterId)
      .then(character => {
        this.setState({ characterInfo: character.data[0], dataRecieved: true });
      })
      .catch(err => console.log("Failed at Get Character Info => ", err));
  }

  renderCharacterStats() {
    return(
      <div>
        <div className="CharacterStats-header">
          <h1 className="CharacterStats-PlayerName">{this.state.characterInfo.characterName}</h1>
          <h3 className="PlayerLevel">Level: {this.state.characterInfo.lvl} {this.state.characterClass}</h3>
        </div>

        <Equipment userData={this.state.userData} characterId={this.state.characterId} />

        <div className="CharacterStats-container">
          <div className="CharacterStats-contents">
            <div className="PlayerStats-container">
              <div className="PlayerAttack-container">
                <h3 className="PlayerDefense">Attack: {this.state.characterInfo.attack}</h3>
              </div>
              <div className="PlayerDefense-container">
                <h3 className="PlayerDefense">Defense: {this.state.characterInfo.defense}</h3>
              </div>
              <div className="PlayerExp-container">
                <h3 className="PlayerExp">Exp: {this.state.characterInfo.exp}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  render() {
    return(
      <div className="CharacterStats">
        {this.state.dataRecieved ? this.renderCharacterStats() : ''}
      </div>
    );
  }
};

export default CharacterStats;
