import React, { Component } from 'react';
import './Skills.css';

//Services Imports
import characterServices from '../../../../services/characterServices';
import skillServices from '../../../../services/skillServices';

class Skills extends Component {

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
          skillServices.getClassSkills(this.state.characterInfo.classId)
            .then(skills => {
              this.setState({ skills: skills.data }, () => {
                skillServices.getCharacterSkills(this.props.characterId)
                  .then(characterSkills => {
                    this.setState({ characterSkills: characterSkills.data, dataRecieved: true });
                  })
                  .catch(err => console.log("Failed at Get Character Skills => ", err));
              });
            })
            .catch(err => console.log("Failed at Get Skills => ", err));
        });
      })
      .catch(err => console.log("Failed at Get Character Info => ", err));
  }

  renderCharacterSkills() {
    let CharacterSkills = this.state.characterSkills.map((el, idx) => {
      return(
        <div className="Skills-characterSkill">
          <div className={`${el.skillName}-icon`}>
            <span className="Skills-characterSkill-tooltiptext-container">
              <h3 className="Skills-characterSkill-tooltiptext">{el.skillName}</h3>
              <h4 className="Skills-characterSkills-tooltiptext">{el.skillType}</h4>
              {el.baseDamage > 0 ? <h4 className="Skills-characterSkill-tooltiptext">Base Damage: {el.baseDamage}</h4> : ''}
              <h4 className="Skills-characterSkill-tooltiptext">{el.skillDescription}</h4>
            </span>
          </div>
        </div>
      );
    });

    return(
      <div className="Skills-characterSkills-container">
        <div className="Skills-characterSkills-content">
          {CharacterSkills}
        </div>
      </div>
    );
  }

  renderSkills() {
    let Skills = this.state.skills.map((el, idx) => {
      return(
        <div className="Skills-classSkill">
        </div>
      );
    });

    return(
      <div className="Skills-classSkills-container">
        <div className="Skills-classSkills-contents">
          {Skills}
        </div>
      </div>
    );
  }

  render() {
    return(
      <div className="Skills">
        {this.state.dataRecieved ? this.renderCharacterSkills() : ''}
      </div>
    );
  }
};

export default Skills;
