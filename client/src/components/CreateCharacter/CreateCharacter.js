import React, { Component } from 'react';
import './CreateCharacter.css';

//Services Imports
import skillServices from '../../services/skillServices';
import services from '../../services/characterServices';

class CreateCharacter extends Component {

  constructor(props) {
    super(props);
    this.state = {
      userData: this.props.userData,

      attack: null,
      defense: null
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    let name = e.target.name;
    let value = e.target.value;
    this.setState({
      [name]: value
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    switch(this.state.classId) {
      case '1':
        this.setState({ attack: 10, defense: 12, skillData: {
          skillName: "Knight Default",
          skillDescription: "",
          skillType: "Melee",
          levelRequirement: 1,
          classRequirement: 1,
          baseDamage: 50,
          buff: 0
        }}, () => this.createCharacter());
        break;
      case '2':
        this.setState({ attack: 12, defense: 8, skillData: {
          skillName: "Wizard Default",
          skillDescription: "",
          skillType: "Melee",
          levelRequirement: 1,
          classRequirement: 2,
          baseDamage: 50,
          buff: 0
        }}, () => this.createCharacter());
        break;
      case '3':
        this.setState({ attack: 11, defense: 10, skillData: {
          skillName: "Archer Default",
          skillDescription: "",
          skillType: "Melee",
          levelRequirement: 1,
          classRequirement: 3,
          baseDamage: 50,
          buff: 0
        }}, () => this.createCharacter());
        break;
      default:
        this.setState({ attack: 10, defense: 10 }, () => this.createCharacter());
        break;
    }
  }

  createCharacter() {
    let data = {
      userId: this.state.userData.userId,
      characterName: this.state.characterName,
      classId: this.state.classId,
      health: 100,
      attack: this.state.attack,
      defense: this.state.defense
    }
    services.createCharacter(data)
      .then(character => {
        this.setState({ characterInfo: character.data }, () => {
          skillServices.defaultSkill({userId: this.state.userData.userId, characterId: this.state.characterInfo.id, skillData:this.state.skillData})
            .then(skill => {
              this.props.renderChooseCharacter();
            })
            .catch(err => console.log("Failed at Equip Skill => ", err));
        });
      })
      .catch(err => {
        console.log("Failed at Create Character => ", err);
      })
  }

  render() {
    return(
      <div className="CreateCharacter">
        <div className="CreateCharacter-form-container">
          <h1 className="CreateCharacter-header">Create Character</h1>
          <form className="CreateCharacter-form" onSubmit={this.handleSubmit}>
            <input className="CreateCharacter-characterName" type="text" name="characterName" placeholder="name" onChange={this.handleChange} />
            <label className="CreateCharacter-knight-label">
              <input className="CreateCharacter-knight" type="radio" name="classId" value="1" onChange={this.handleChange} />
              Knight
            </label>

            <label className="CreateCharacter-wizard-label">
              <input className="CreateCharacter-wizard" type="radio" name="classId" value="2" onChange={this.handleChange} />
              Wizard
            </label>

            <label className="CreateCharacter-archer-label">
              <input className="CreateCharacter-archer" type="radio" name="classId" value="3" onChange={this.handleChange} />
              Archer
            </label>
            <input className="CreateCharacter-submit" type="submit" value="Create" />
          </form>
        </div>
      </div>
    );
  }
};

export default CreateCharacter;
