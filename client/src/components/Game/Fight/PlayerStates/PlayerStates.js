import React, { Component } from 'react';
import './PlayerStates.css';

//CSS Imports
import './KnightStates.css';
import './WizardStates.css';
import './ArcherStates.css';

//Services Imports
import characterServices from '../../../../services/characterServices';

//Component Imports
import Attacks from './Attacks/Attacks';

class PlayerStates extends Component {

  constructor(props) {
    super(props);
    this.state = {
      userData: this.props.userData,
      characterId: this.props.characterId,
      enemyInfo: this.props.enemyInfo,

      playerStates: null,
      rangedAttack: '',
      currentState: null
    }
    this.stateChange = this.stateChange.bind(this);
  }

  componentDidMount() {
    characterServices.getCharacterInfo(this.props.characterId)
      .then(character => {
        this.setState({ characterInfo: character.data[0] }, () => {
          switch(this.state.characterInfo.classId) {
            case 1:
              this.setState({
                playerStates: {
                  idle: 'Knight-idle',
                  meleeAttack: 'Knight-melee-attack',
                  rangedAttack: 'Knight-ranged-attack',
                  die: 'Knight-die'
                }
              }, () => this.setState({ currentState: this.state.playerStates.idle }));
              break;
            case 2:
              this.setState({
                playerStates: {
                  idle: 'Wizard-idle',
                  meleeAttack: 'Wizard-melee-attack',
                  rangedAttack: 'Wizard-ranged-attack',
                  die: 'Wizard-die'
                }
              }, () => this.setState({ currentState: this.state.playerStates.idle }));
              break;
            case 3:
              this.setState({
                playerStates: {
                  idle: 'Archer-idle',
                  meleeAttack: 'Archer-melee-attack',
                  rangedAttack: 'Archer-ranged-attack',
                  die: 'Archer-die'
                }
              }, () => this.setState({ currentState: this.state.playerStates.idle }));
              break;
            default:
              break;
          }
        });
      })
      .catch(err => console.log("Failed at Get Character Info => ", err));
  }

  stateChange(el) {
    if(el.skillType === "Melee")
      this.setState({ currentState: this.state.playerStates.meleeAttack }, () => {
        let dmg = el.baseDamage + (this.state.characterInfo.attack * 2);
        setTimeout(() => {
          this.props.playerAttack(dmg);
          this.setState({ currentState: this.state.playerStates.idle })
        }, 1000);
      });
    else if(el.skillType === "Ranged" || el.skillType === "Spell")
      this.setState({ rangedAttack: `${el.skillName.split(" ").join(",").replace(",", "")}-attack`, currentState: this.state.playerStates.rangedAttack }, () => {
        let dmg = el.baseDamage + (this.state.characterInfo.attack * 2);
        setTimeout(() => {
          this.props.playerAttack(dmg);
          this.setState({ rangedAttack: '', currentState: this.state.playerStates.idle })
        }, 1000);
      });
  }

  render() {
    return(
      <div className="PlayerStates">
        <div className="PlayerStates-Avatar">
          <div className={`${this.state.currentState}`} />
          <div className={`${this.state.rangedAttack}`} />
        </div>
        <Attacks userData={this.state.userData} characterId={this.state.characterId} enemyInfo={this.state.enemyInfo} stateChange={this.stateChange} />
      </div>
    );
  }
};

export default PlayerStates;
