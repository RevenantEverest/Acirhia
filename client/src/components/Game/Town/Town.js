import React, { Component } from 'react';
import './Town.css';
import './TownModals.css';

//Services Imports
import characterServices from '../../../services/characterServices';

//Component Imports
import TileBoard from './TileBoard/TileBoard';
import Inventory from './Inventory/Inventory';
import CharacterStats from './CharacterStats/CharacterStats';

class Town extends Component {

  constructor(props) {
    super(props);
    this.state = {
      userData: this.props.userData,
      characterId: this.props.characterId,
      renderAvatar: null
    }
    this.reRenderTown = this.reRenderTown.bind(this);
  }

  componentDidMount() {
    characterServices.getCharacterInfo(this.state.characterId)
      .then(results => {
        this.setState({ characterInfo: results.data[0], characterInfoRecieved: true }, () => {
          document.querySelector('.Town-PlayerHealth-value').style.width = `${this.state.characterInfo.health}%`;
          switch(this.state.characterInfo.classId) {
            case 1:
              this.setState({ renderAvatar: 'KnightAvatar' });
              break;
            case 2:
              this.setState({ renderAvatar: 'WizardAvatar' });
              break;
            case 3:
              this.setState({ renderAvatar: 'ArcherAvatar' });
              break;
            default:
              break;
          }
        });
      })
      .catch(err => console.log("Failed at Get Character Info => ", err));
  }


  /* Inventory Modal */
  openModalInventory() {
    // let openSound = document.querySelector('.InventoryOpen');
    // openSound.currentTime = 0;
    // openSound.play();

    let modal = document.querySelector('.simpleModal-inventory');
    modal.style.display = "block";
    this.setState({
      modalOpen: true
    })
  }

  closeModalInventory() {
    // let openSound = document.querySelector('.InventoryClose');
    // openSound.currentTime = 0;
    // openSound.play();

    this.componentDidMount();

    let modal = document.querySelector('.simpleModal-inventory');
    modal.style.display = "none";
    this.setState({
      modalOpen: false
    })
  }
  /* END */

  /* Character Stats Modal */
  openModalCharacterStats() {
    // let openSound = document.querySelector('.InventoryOpen');
    // openSound.currentTime = 0;
    // openSound.play();

    let modal = document.querySelector('.simpleModal-characterStats');
    modal.style.display = "block";
    this.setState({
      modalOpen: true
    })
  }

  closeModalCharacterStats() {
    // let openSound = document.querySelector('.InventoryClose');
    // openSound.currentTime = 0;
    // openSound.play();

    this.componentDidMount();

    let modal = document.querySelector('.simpleModal-characterStats');
    modal.style.display = "none";
    this.setState({
      modalOpen: false
    })
  }

  reRenderTown() {
    this.componentDidMount();
  }

  renderBasicStats() {
    return(
      <div>
        <div className="simpleModal-inventory">
          <div className="modalContent-inventory">
            <span className="closeButton" onClick={(e) => this.closeModalInventory()}>&times;</span>
            <h1 className="modalHeading-inventory">Inventory</h1>
            <div className="Game-Inventory-container">
              <Inventory userData={this.state.userData} characterInfo={this.state.characterInfo} reRenderTown={this.reRenderTown} />
            </div>
          </div>
        </div>

        <div className="Town-stats" onClick={(e) => this.openModalCharacterStats()}/>

        <div className="simpleModal-characterStats">
          <div className="modalContent-characterStats">
            <span className="closeButton" onClick={(e) => this.closeModalCharacterStats()}>&times;</span>
            <div className="Game-characterStats-container">
              <CharacterStats characterInfo={this.state.characterInfo} />
            </div>
          </div>
        </div>
        <div className="Town-basicStats-container">
          <div className="Town-PlayerVitals">
            <h1 className="Town-PlayerName">{this.state.characterInfo.characterName}</h1>
            <p className="Town-PlayerLevel">Level: {this.state.characterInfo.lvl}</p>
            <div className="Town-PlayerHealth-container">
              <div className="Town-PlayerHealth-value" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  render() {
    return(
      <div className="Town">
        <div className="Town-leaderboards" />
        <div className="Town-chooseCharacter" onClick={(e) => this.props.renderChooseCharacter()} />
        <div className="Town-shop" onClick={(e) => this.props.renderShop()} />
        <div className="Town-fight" onClick={(e) => this.props.renderFight()} />
        <div className="Town-arena" onClick={(e) => this.props.renderArena()} />
        <div className="Town-inventory" onClick={(e) => this.openModalInventory()} />

        <TileBoard />
        <div className="Town-Avatar">
          <div className={`Town-${this.state.renderAvatar}`} />
        </div>
        {this.state.characterInfoRecieved ? this.renderBasicStats() : ''}
      </div>
    );
  }
};

export default Town;