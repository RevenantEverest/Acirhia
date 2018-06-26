import React, { Component } from 'react';
import './Game.css';

//Component Imports
import CreateCharacter from '../CreateCharacter/CreateCharacter';
import ChooseCharacter from '../ChooseCharacter/ChooseCharacter';
import Town from './Town/Town';
import Fight from './Fight/Fight';
import Arena from './Arena/Arena';
import Shop from './Shop/Shop';
import Quests from './Quests/Quests';

class Game extends Component {

  constructor(props) {
      super(props);
      this.state = {
        userData: this.props.userData,

        chooseCharacter: true,
        createCharacter: false,

        fight: false,
        arena: false,
        town: false,
        shop: false,
        quests: false
      }
      this.renderCreateCharacter  = this.renderCreateCharacter.bind(this);
      this.renderChooseCharacter = this.renderChooseCharacter.bind(this);
      this.renderFight = this.renderFight.bind(this);
      this.renderArena = this.renderArena.bind(this);
      this.renderTown = this.renderTown.bind(this);
      this.renderShop = this.renderShop.bind(this);
      this.renderQuests = this.renderQuests.bind(this);

      this.getCharacter = this.getCharacter.bind(this);
  }

  renderCreateCharacter() { this.setState({ chooseCharacter: false, createCharacter: true, fight: false, arena: false, town: false, shop: false, quests: false }); }
  renderChooseCharacter() { this.setState({ chooseCharacter: true, createCharacter: false, fight: false, arena: false, town: false, shop: false, quests: false }); }
  renderFight() { this.setState({ chooseCharacter: false, createCharacter: false, fight: true, arena: false, town: false, shop: false, quests: false }); }
  renderArena() { this.setState({ chooseCharacter: false, createCharacter: false, fight: false, arena: true, town: false, shop: false, quests: false }) }
  renderTown() { this.setState({ chooseCharacter: false, createCharacter: false, fight: false, arena: false, town: true, shop: false,quests: false }); }
  renderShop() { this.setState({ chooseCharacter: false, createCharacter: false, fight: false, arena: false, town: false, shop: true, quests: false }); }
  renderQuests() { this.setState({ chooseCharacter: false, createCharacter: false, fight: false, arena: false, town: false, shop: false, quests: true }); }

  getCharacter(id) {
    this.setState({ characterId: id });
  }

  render() {
    return(
      <div className="Game">
        {this.state.chooseCharacter ? <ChooseCharacter userData={this.state.userData} renderCreateCharacter={this.renderCreateCharacter}
                                                       getCharacter={this.getCharacter} renderTown={this.renderTown} /> : ''}
        {this.state.createCharacter ? <CreateCharacter userData={this.state.userData} renderChooseCharacter={this.renderChooseCharacter} /> : ''}

        {this.state.town ? <Town userData={this.state.userData} characterId={this.state.characterId} renderChooseCharacter={this.renderChooseCharacter}
                                  renderCharacterStats={this.renderCharacterStats} renderShop={this.renderShop} renderFight={this.renderFight} renderArena={this.renderArena}
                                  renderQuests={this.renderQuests} /> : ''}
        {this.state.shop ? <Shop userData={this.state.userData} characterId={this.state.characterId} renderTown={this.renderTown} /> : ''}
        {this.state.fight ? <Fight userData={this.state.userData} characterId={this.state.characterId} renderTown={this.renderTown} /> : ''}
        {this.state.arena ? <Arena userData={this.state.userData} characterId={this.state.characterId} renderTown={this.renderTown} /> : ''}
        {this.state.quests ? <Quests userData={this.state.userData} characterId={this.state.characterId} renderTown={this.renderTown} /> : ''}
      </div>
    );
  }
};

export default Game;
