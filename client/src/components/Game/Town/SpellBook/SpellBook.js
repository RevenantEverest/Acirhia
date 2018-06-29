import React, { Component } from 'react';
import './SpellBook.css';

//Services Imports
import characterServices from '../../../../services/characterServices';
import attackServices from '../../../../services/attackServices';

class SpellBook extends Component {

  constructor(props) {
    super(props);
    this.state = {
      userData: this.props.userData,
      characterId: this.props.characterId
    }
  }

  componentDidMount() {
    characterServices.getCharacterInfo(this.props.characterId)
      .then(character => {
        this.setState({ characterInfo: character.data[0] });
        attackServices.getCharacterAttcks(this.props.characterId)
          .then(attacks => {
            this.setState({ attacks: attacks.data, dataRecieved: true });
          })
          .catch(err => console.log("Failed at Get Character Attacks => ", err));
      })
      .catch(err => console.log("Failed at Get Character Info => ", err));
  }

  renderAttacks() {
    let Attacks = this.state.attacks.map((el, idx) => {
      return(
        <div className="SpellBook-attack">
          <div className={`${el.attackName}-icon`}>
            <span className="${el.attackName-text}">{el.attackName}</span>
          </div>
        </div>
      );
    });

    return(
      <div className="SpellBook-attacks-container">
        <div className="SpellBook-attacks-content">
          {Attacks}
        </div>
      </div>
    );
  }

  render() {
    return(
      <div className="SpellBook">
        {this.state.dataRecieved ? this.renderAttcks() : ''}
      </div>
    );
  }
};

export default SpellBook;
