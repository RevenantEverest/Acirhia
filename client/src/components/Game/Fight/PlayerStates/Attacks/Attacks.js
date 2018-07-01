import React, { Component } from 'react';
import './Attacks.css';

//Services Imports
import characterServices from '../../../../../services/characterServices';
import skillServices from '../../../../../services/skillServices';

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
        this.setState({ characterInfo: character.data[0] }, () => {
          skillServices.getCharacterSkills(this.props.characterId)
            .then(skills => {
              this.setState({ characterSkills: skills.data, dataRecieved: true });
            })
            .catch(err => console.log("Failed at Get Character Skills => ", err));
        });
      })
      .catch(err => console.log("Failed at Get Character Info => ", err));
  }

  renderSkills() {
    let Skills = this.state.characterSkills.map((el, idx) => {
      return(
        <div className="Attacks-skill" key={idx}>
          <div className={`${(el.skillName).split(" ").join(",").replace(",", "")}-icon Attacks-skill-icon`} onClick={(e) => this.props.stateChange(el)} />
          <h4 className="Attacks-skill-text">{el.skillName}</h4>
        </div>
      );
    });

    return(
      <div className="Attacks-skills-container">
        <div className="Attacks-skills-contents">
          {Skills}
        </div>
      </div>
    );
  }

  render() {
    return(
      <div className="Attacks">
        {this.state.dataRecieved ? this.renderSkills() : <div className="loading" />}
      </div>
    );
  }
};

export default Attacks;
