import React, { Component } from 'react';
import './Town.css';
import './TownModals.css';

//Services Imports
import characterServices from '../../../services/characterServices';

//Component Imports
import TileBoard from './TileBoard/TileBoard';
import Inventory from '../Inventory/Inventory';
import CharacterStats from './CharacterStats/CharacterStats';
import QuestLog from '../QuestLog/QuestLog';
import SkillBook from './SkillBook/SkillBook';

class Town extends Component {

  constructor(props) {
    super(props);
    this.state = {
      userData: this.props.userData,
      characterId: this.props.characterId,
      renderAvatar: null,
      renderStats: true
    }
    this.reRenderTown = this.reRenderTown.bind(this);
    this.reRenderStats = this.reRenderStats.bind(this);
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
      this.setState({ renderStats: true });
  }


  //Inventory Modal
  openModalInventory() {
    let modal = document.querySelector('.simpleModal-inventory');
    modal.style.display = "block";
    this.setState({
      modalOpen: true
    })
  }

  closeModalInventory() {
    this.componentDidMount();

    let modal = document.querySelector('.simpleModal-inventory');
    modal.style.display = "none";
    this.setState({
      modalOpen: false
    })
  }

  // Character Stats Modal
  openModalCharacterStats() {
    let modal = document.querySelector('.simpleModal-characterStats');
    modal.style.display = "block";
    this.setState({
      modalOpen: true
    })
  }

  closeModalCharacterStats() {
    this.componentDidMount();

    let modal = document.querySelector('.simpleModal-characterStats');
    modal.style.display = "none";
    this.setState({
      modalOpen: false
    })
  }

  //Quest Log Modal
  openModalQuestLog() {
    let modal = document.querySelector('.simpleModal-questLog');
    modal.style.display = "block";
    this.setState({
      modalOpen: true
    })
  }

  closeModalQuestLog() {
    this.componentDidMount();

    let modal = document.querySelector('.simpleModal-questLog');
    modal.style.display = "none";
    this.setState({
      modalOpen: false
    })
  }

  //Skill Book Modal
  openModalSkillBook() {
    let modal = document.querySelector('.simpleModal-skillBook');
    modal.style.display = "block";
    this.setState({
      modalOpen: true
    })
  }

  closeModalSkillBook() {
    this.componentDidMount();

    let modal = document.querySelector('.simpleModal-skillBook');
    modal.style.display = "none";
    this.setState({
      modalOpen: false
    })
  }

  reRenderTown() { this.componentDidMount(); }
  reRenderStats() { this.setState({ renderStats: false }, () => this.componentDidMount()); }

  renderModals() {
    return(
      <div>
        <div className="simpleModal-inventory">
          <div className="modalContent-inventory">
            <span className="closeButton" onClick={(e) => this.closeModalInventory()}>&times;</span>
            <h1 className="modalHeading-inventory">Inventory</h1>
            <div className="Game-Inventory-container">
              <Inventory userData={this.state.userData} characterId={this.state.characterId} reRenderStats={this.reRenderStats} />
            </div>
          </div>
        </div>

        <div className="Town-stats" onClick={(e) => this.openModalCharacterStats()}/>

        <div className="simpleModal-characterStats">
          <div className="modalContent-characterStats">
            <span className="closeButton" onClick={(e) => this.closeModalCharacterStats()}>&times;</span>
            <div className="Game-characterStats-container">
              {this.state.renderStats ? <CharacterStats characterId={this.state.characterId} reRenderStats={this.reRenderStats} /> : console.log("IT WAS FALSE")}
            </div>
          </div>
        </div>

        <div className="simpleModal-questLog">
          <div className="modalContent-questLog">
            <span className="closeButton" onClick={(e) => this.closeModalQuestLog()}>&times;</span>
            <h1 className="modalHeading-questLog">Quest Log</h1>
            <div className="Game-QuestLog-container">
              <QuestLog userData={this.state.userData} characterId={this.state.characterId} />
            </div>
          </div>
        </div>

        <div className="simpleModal-skillBook">
          <div className="modalContent-skillBook">
            <span className="closeButton" onClick={(e) => this.closeModalSkillBook()}>&times;</span>
            <h1 className="modalHeading-skillBook">Skills</h1>
            <div className="Game-skillBook-container">
              <SkillBook userData={this.state.userData} characterId={this.state.characterId} />
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
        <div className="Town-quests" onClick={(e) => this.props.renderQuests()} />
        <div className="Town-questLog" onClick={(e) => this.openModalQuestLog()} />
        <div className="Town-skillBook" onClick={(e) =>  this.openModalSkillBook()} />

        <TileBoard />
        <div className="Town-Avatar">
          <div className={`Town-${this.state.renderAvatar}`} />
        </div>
        {this.state.characterInfoRecieved ? this.renderModals() : ''}
      </div>
    );
  }
};

export default Town;
