import React, { Component } from 'react';
import './Attacks.css';

//Services Imports
import characterServices from '../../../../services/characterServices';
import attackServices from '../../../../services/attackServices';

class Attacks extends Component {

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
        attackServices.getCharacterAttacks(this.props.characterId)
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
        <div className="Attacks-attack">
          <div className={`Attacks-${el.attackName}`}>
            <span className="Attacks-${el.attackName-text}">{el.attackName}</span>
          </div>
        </div>
      );
    });

    return(
      <div className="Attacks-container">
        <div className="Attacks-contents">
          {Attacks}
        </div>
      </div>
    );
  }

  render() {
    return(
      <div className="Attacks">
        {this.state.dataRecieved ? this.renderAttacks() : <div className="loading" />}
      </div>
    );
  }
};

export default Attacks;
