import React, { Component } from 'react';
import services from '../../services/characterServices';
import './CreateCharacter.css';

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
        this.setState({ attack: 10, defense: 12 }, () => this.createCharacter());
        break;
      case '2':
        this.setState({ attack: 12, defense: 8 }, () => this.createCharacter());
        break;
      case '3':
        this.setState({ attack: 11, defense: 10 }, () => this.createCharacter());
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
    console.log("This is my data => ", data);
    console.log("This is my classId => ", this.state.classId);
    services.createCharacter(data)
      .then(results => {
        console.log("Character Created => ", results);
        this.props.renderChooseCharacter();
      })
      .catch(err => {
        console.log("Failed at Create Character => ", err);
      })
  }

  render() {
    return(
      <div className="CreateCharacter">
        <form className="CreateCharacter-form" onSubmit={this.handleSubmit}>
          <input type="text" name="characterName" placeholder="name" onChange={this.handleChange} />
          <label>
            <input type="radio" name="classId" value="1" onChange={this.handleChange} />
            Knight
          </label>

          <label>
            <input type="radio" name="classId" value="2" onChange={this.handleChange} />
            Wizard
          </label>

          <label>
            <input type="radio" name="classId" value="3" onChange={this.handleChange} />
            Archer
          </label>
          <input type="submit" value="Create" />
        </form>
      </div>
    );
  }
};

export default CreateCharacter;
