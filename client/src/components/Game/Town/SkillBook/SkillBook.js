import React, { Component } from 'react';
import './SkillBook.css';

//Services Imports
import characterServices from '../../../../services/characterServices';
import skillServices from '../../../../services/skillServices';

class SkillBook extends Component {

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
              this.setState({ classSkills: skills.data }, () => {
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

  equipSkill(el) {
    console.log("Sup boi");
    if(this.state.characterSkills.length <= 4) {
      let data = {
        userId: this.state.userData.userId,
        characterId: this.state.characterId,
        skillName: el.skillName,
        skillDescription: el.skillDescription,
        skillType: el.skillType,
        levelRequirement: el.levelRequirement,
        classRequirement: el.classRequirement,
        baseDamage: el.baseDamage,
        buff: el.buff
      }
      skillServices.equipSkill(data)
        .then(results => {
          this.componentDidMount();
        })
        .catch(err => console.log("Failed at Equip Skill => ", err));
    }else {
      this.setState({ skillLimitReached: true });
    }
  }

  unEquipSkill(el) {

  }

  renderSkills() {
    let charS = this.state.characterSkills;
    let charIn = this.state.characterInfo;
    let ClassSkills = this.state.classSkills.map((el, idx) => {
      let EquipButton = <button className="Equip-Skill" onClick={(e) => this.equipSkill(el)}>Equip Skill</button>;
      let ClassIcon = `${(el.skillName).split(" ").join(",").replace(",", "")}-icon`;
      let levelReq;
      for(let i = 0; i < charS.length; i++) {
        if(charS.skillName === el.skillName)
          EquipButton = <button className="AlreadyEquiped-Skill" onClick={(e) => this.unEquipSkill(el)}>Unequip Skill</button>;
      }
      if(charIn.lvl < el.levelRequirement) {
        ClassIcon = `${(el.skillName).split(" ").join(",").replace(",", "")}-icon-UA`;
        EquipButton = <button className="Equip-Skill" disabled>Equip Skill</button>
        levelReq = <h4 className="Skills-classSkill-tooltiptext reqLevel">Requires Level {el.levelRequirement}</h4>;
      }
      return(
        <div className="Skills-classSkill" key={idx}>
          <div className={`${ClassIcon} skill-icon`}>
            <span className="Skills-classSkill-tooltiptext-container">
              <h3 className="Skills-classSkill-tooltiptext">{el.skillName}</h3>
              <h4 className="Skills-classSkill-tooltiptext">{el.skillType}</h4>
              {levelReq}
              {el.baseDamage > 0 ? <h4 className="Skills-classSkill-tooltiptext">Base Damage: {el.baseDamage}</h4> : ''}
              <br></br>
              <h4 className="Skills-classSkill-tooltiptext">{el.skillDescription}</h4>
            </span>
            {EquipButton}
          </div>
        </div>
      );
    });

    return(
      <div className="Skills-classSkills-container">
        <div className="Skills-classSkills-contents">
          {ClassSkills}
        </div>
      </div>
    );
  }

  renderSkillLimitReached() {
    setTimeout(() => {
      this.setState({ skillLimitReached: false });
    }, 1000)
    return(
      <div className="Skills-skillLimitReached">
        <h1 className="Skills-skillLimitReached-text">Skill Limit Reached</h1>
      </div>
    );
  }

  render() {
    return(
      <div className="Skills">
        {this.state.dataRecieved ? this.renderSkills() : ''}
        {this.state.skillLimitReached ? this.renderSkillLimitReached() : ''}
      </div>
    );
  }
};

export default SkillBook;
