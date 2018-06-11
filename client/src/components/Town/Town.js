import React, { Component } from 'react';
import './Town.css';
import './TownModals.css';

//Component Imports
import TileBoard from '../TileBoard/TileBoard';
import Inventory from '../Inventory/Inventory';

class Town extends Component {

  constructor(props) {
    super(props);
    this.state = {
      userData: this.props.userData,
      characterInfo: this.props.characterInfo,
      renderAvatar: null
    }
  }

  componentDidMount() {
    switch(this.state.characterInfo.classID) {
      case 1:
        this.setState({ renderAvatar: 'KnightAvatar' })
        break;
      case 2:
        this.setState({ renderAvatar: 'WizardAvatar' })
        break;
      case 3:
        this.setState({ renderAvatar: 'ArcherAvatar' })
        break;
      default:
        break;
    }

    document.querySelector('.Town-PlayerHealth-value').style.width = `${this.state.characterInfo.health}%`;
  }

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

  render() {
    return(
      <div className="Town">
        <div className="Town-leaderboards" />
        <div className="Town-chooseCharacter" onClick={(e) => this.props.renderChooseCharacter()} />
        <div className="Town-shop" onClick={(e) => this.props.renderShop()} />
        <div className="Town-fight" onClick={(e) => this.props.renderFight()} />
        <div className="Town-arena" onClick={(e) => this.props.renderArena()} />
        <div className="Town-inventory" onClick={(e) => this.openModalInventory()} />

        <div className="simpleModal-inventory">
          <div className="modalContent-inventory">
            <span className="closeButton" onClick={(e) => this.closeModalInventory()}>&times;</span>
            <h1 className="modalHeading-inventory">Inventory</h1>
            <div className="Game-Inventory-container">
              <Inventory characterInfo={this.state.characterInfo} />
            </div>
          </div>
        </div>

        <div className="Town-stats" />
        <TileBoard />
        <div className="Town-Avatar">
          <div className={`Town-${this.state.renderAvatar}`} />
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
};

export default Town;
