import React, { Component } from 'react';
import './ChooseCharacter.css';

//Services Imports
import services from '../../services/userServices';
import characterServices from '../../services/characterServices';
import skillServices from '../../services/skillServices';
import equipmentServices from '../../services/equipmentServices';
import inventoryServices from '../../services/inventoryServices';
import questLogServices from '../../services/questLogServices';

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
    this.setState({ selectedCharacter: data.id })
    switch(data.classId) {
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

    // inventoryServices.removeCharacterInventory(this.state.selectedCharacter)
    //   .then(inventory => {
    //     equipmentServices.removeCharacterEquipment(this.state.selectedCharacter)
    //       .then(equipment => {
    //         questLogServices.removeQuestLog(this.state.selectedCharacter)
    //           .then(questLog => {
    //             skillServices.removeCharacterSkills(this.state.selectedCharacter)
    //               .then(characterSkills => {
    //                 characterServices.deleteCharacter(this.state.selectedCharacter)
    //                   .then(results => {
    //                     this.setState({ renderAvatar: '' });
    //                     this.componentDidMount();
    //                   })
    //                   .catch(err => console.log("Failed at Delete Character => ", err));
    //               })
    //               .catch(err => console.log("Failed at Remove Character Skills => ", err));
    //           })
    //           .catch(err => console.log("Failed at Remove Quest Log => ", err));
    //       })
    //       .catch(err => console.log("Failed at Remove Character Equipment => ", err));
    //   })
    //   .catch(err => console.log("Failed at Remove Character Inventory => ", err));

    characterServices.deleteCharacter(this.state.selectedCharacter)
      .then(results => {
        this.setState({ renderAvatar: '' });
        this.componentDidMount();
      })
      .catch(err => console.log("Failed at Delete Character => ", err));


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
      switch(el.classId) {
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
        <div className="Character" key={idx} onClick={(e) => this.handleCharacterSelect(({id: el.id, classId: el.classId}))}>
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
