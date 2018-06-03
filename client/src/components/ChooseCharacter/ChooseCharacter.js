import React, { Component } from 'react';
import services from '../../services/apiServices';
import './ChooseCharacter.css';

class ChooseCharacter extends Component {

  constructor(props) {
    super(props);
    this.state = {
      userData: this.props.userData,
      characterData: null
    }
  }

  componentDidMount() {
    services.getCharactersFromUser(this.state.userData.userId)
      .then(results => {
        console.log("Characters => ", results.data);
        this.setState({ characterData: results.data });
      })
      .catch(err => {
        console.log("Failed at Get Characters From User => ", err);
      })
  }

  render() {
    return(
      <div className="ChooseCharacter">
        <button className="ChooseCharacter-Play" onClick={(e) => this.props.renderTown()}>Play</button>
        <button className="ChooseCharacter-createCharacter" onClick={(e) => this.props.renderCreateCharacter()}>Create Character</button>
      </div>
    );
  }
};

export default ChooseCharacter;
