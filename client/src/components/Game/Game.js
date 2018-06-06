import React, { Component } from 'react';
import services from '../../services/apiServices';
import './Game.css';

//Component Imports
import CreateCharacter from '../CreateCharacter/CreateCharacter';
import ChooseCharacter from '../ChooseCharacter/ChooseCharacter';
import Town from '../Town/Town';
import CharacterStats from '../CharacterStats/CharacterStats';
import Fight from '../Fight/Fight';
import Arena from '../Arena/Arena';
import Shop from '../Shop/Shop';

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
        characterStats: false,
        shop: false
      }
      this.renderCreateCharacter  = this.renderCreateCharacter.bind(this);
      this.renderChooseCharacter = this.renderChooseCharacter.bind(this);
      this.renderFight = this.renderFight.bind(this);
      this.renderArena = this.renderArena.bind(this);
      this.renderTown = this.renderTown.bind(this);
      this.renderCharacterStats = this.renderCharacterStats.bind(this);
      this.renderShop = this.renderShop.bind(this);

      this.getCharacter = this.getCharacter.bind(this);
  }

  renderCreateCharacter() { this.setState({ chooseCharacter: false, createCharacter: true, fight: false, arena: false, town: false, characterStats: false, shop: false }); }
  renderChooseCharacter() { this.setState({ chooseCharacter: true, createCharacter: false, fight: false, arena: false, town: false, characterStats: false, shop: false }); }
  renderFight() { this.setState({ chooseCharacter: false, createCharacter: false, fight: true, arena: false, town: false, characterStats: false,  shop: false }); }
  renderArena() { this.setState({ chooseCharacter: false, createCharacter: false, fight: false, arena: true, town: false, characterStats: false, shop: false }) }
  renderTown() { this.setState({ chooseCharacter: false, createCharacter: false, fight: false, arena: false, town: true, characterStats: false, shop: false }); }
  renderCharacterStats() { this.setState({ chooseCharacter: false, createCharacter: false, fight: false, arena: false, town: false, characterStats: true, shop: false }); }
  renderShop() { this.setState({ chooseCharacter: false, createCharacter: false, fight: false, arena: false, town: false, characterStats: false, shop: true }); }

  getCharacter(id) {
    services.getCharacterInfo(id)
      .then(results => {
        this.setState({ characterInfo: results.data })
      })
      .catch(err => console.log("Failed at Get Character Info => ", err))
  }

  render() {
    return(
      <div className="Game">
        {this.state.chooseCharacter ? <ChooseCharacter userData={this.state.userData} renderCreateCharacter={this.renderCreateCharacter}
                                                       getCharacter={this.getCharacter} renderTown={this.renderTown} /> : ''}
        {this.state.createCharacter ? <CreateCharacter userData={this.state.userData} renderChooseCharacter={this.renderChooseCharacter} /> : ''}

        {this.state.town ? <Town userData={this.state.userData} characterInfo={this.state.characterInfo} renderChooseCharacter={this.renderChooseCharacter}
                                  renderCharacterStats={this.renderCharacterStats} renderShop={this.renderShop} renderFight={this.renderFight} renderArena={this.renderArena} /> : ''}
        {this.state.shop ? <Shop userData={this.state.userData} characterInfo={this.state.characterInfo} renderTown={this.renderTown} /> : ''}
        {this.state.fight ? <Fight userData={this.state.userData} characterInfo={this.state.characterInfo} renderTown={this.renderTown} /> : ''}
        {this.state.arena ? <Arena userData={this.state.userData} characterInfo={this.state.characterInfo} renderTown={this.renderTown} /> : ''}
      </div>
    );
  }
};

export default Game;
