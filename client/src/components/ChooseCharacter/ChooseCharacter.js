import React, { Component } from 'react';
import services from '../../services/userServices';
import './ChooseCharacter.css';

class ChooseCharacter extends Component {

  constructor(props) {
    super(props);
    this.state = {
      userData: this.props.userData,
      characterData: null,
      characterDataRecieved: false,
      selectedCharacter: null
    }
  }

  componentDidMount() {
    services.getCharactersFromUser(this.state.userData.userId)
      .then(results => {
        console.log("Characters => ", results.data);
        this.setState({ characterData: results.data, characterDataRecieved: true });
      })
      .catch(err => console.log("Failed at Get Characters From User => ", err))
  }

  handleCharacterSelect(data) {
    console.log(data);
    this.setState({ selectedCharacter: data.id })
    switch(data.classID) {
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
  }

  deleteCharacter() {
    if(this.state.selectedCharacter == null)
      return;
    services.deleteCharacter(this.state.selectedCharacter)
      .then(results => {
        console.log('Character Deleted => ', results);
        this.componentDidMount();
      })
      .catch(err => console.log("Failed at Delete Character => ", err))
  }

  play() {
    if(this.state.selectedCharacter == null)
      return;
    this.props.getCharacter(this.state.selectedCharacter);
    setTimeout(() => {
      this.props.renderTown();
    }, 2000)
  }

  renderCharacters() {
    let Characters = this.state.characterData.map((el, idx) => {
      let characterClass;
      switch(el.classID) {
        case 1:
          characterClass = 'Knight'
          break;
        case 2:
          characterClass = 'Wizard'
          break;
        case 3:
          characterClass = 'Archer'
          break;
        default:
          break;
      }
      return(
        <div className="Character" key={idx} onClick={(e) => this.handleCharacterSelect(({id: el.id, classID: el.classID}))}>
          <div className="Character-contents">
            <h1 className="CharacterName">{el.characterName}</h1>
            <h2 className="CharacterLevel">Level: {el.lvl}</h2>
            <h2 className="CharacterClass">{characterClass}</h2>
          </div>
        </div>
      );
    });

    return(
      <div className="ChooseCharacter-characterList">
        {Characters}
      </div>
    );
  }

  render() {
    return(
      <div className="ChooseCharacter">
        <div className="ChooseCharacter-characterList-container">
          {this.state.characterDataRecieved ? this.renderCharacters() : ''}
        </div>
        <div className="ChooseCharacter-Avatar">
          <div className={`${this.state.renderAvatar}`} />
        </div>
        <button className="ChooseCharacter-Play" onClick={(e) => this.play()}>Play</button>
        <button className="ChooseCharacter-Delete" onClick={(e) => this.deleteCharacter()}>Delete</button>
        <button className="ChooseCharacter-createCharacter" onClick={(e) => this.props.renderCreateCharacter()}>Create Character</button>
      </div>
    );
  }
};

export default ChooseCharacter;
