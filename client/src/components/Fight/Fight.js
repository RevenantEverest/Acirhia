import React, { Component } from 'react';
import services from '../../services/apiServices';
import './Fight.css';
import './FightStates.css';
import './FightEnemyStates.css';

class Fight extends Component {

  constructor(props) {
    super(props);
    this.state = {
      userData: this.props.userData,
      characterInfo: this.props.characterInfo,

      enemyState: 'Enemy-idle',

      /* Player Stats */
      playerHealth: this.props.characterInfo.health
    }
  }

  componentDidMount() {
    services.getEnemies()
      .then(results => {
        let enemyChosen = results.data[this.RNG(results.data.length)];
        console.log(enemyChosen);
        this.setState({ enemyInfo: enemyChosen,
                        enemyName: enemyChosen.enemyName,
                        enemyHealth: enemyChosen.health,
                        enemyAttack: enemyChosen.attack,
                        enemyDefense: enemyChosen.defense,
                        enemyDataRecieved: true,
                        enemyState: 'Enemy-idle' });
      })
      .catch(err => console.log("Failed at Get Enemies => ", err));
    switch(this.state.characterInfo.classID) {
      case 1:
        this.setState({ playerClass: 'Knight' }, () => this.setState({ playerState: `${this.state.playerClass}-idle` }))
        break;
      case 2:
        this.setState({ playerClass: 'Wizard' }, () => this.setState({ playerState: `${this.state.playerClass}-idle` }))
        break;
      case 3:
        this.setState({ playerClass: 'Archer' }, () => this.setState({ playerState: `${this.state.playerClass}-idle` }))
        break;
      default:
        break;
    }

    let playerHealth = document.querySelector('.PlayerHealth-value');
    playerHealth.style.width = `${this.state.characterInfo.health}%`;
  }

  RNG(int) { let num = Math.floor(Math.random() * int); return num; }

  attackOne() {
    if(this.state.enemyHealth > 0) {
      let attack = this.state.characterInfo.attack;
      let dmg = this.RNG(attack);

      this.setState({ playerState: `${this.state.playerClass}-attack` }, () => {
        setTimeout(() => {
          this.setState({ playerState: `${this.state.playerClass}-idle` })
        }, 1000)
      })

      this.setState({ enemyHealth: this.state.enemyHealth - dmg }, () => {
        let enemyHealthDisplay = document.querySelector('.EnemyHealth-value');
        enemyHealthDisplay.style.width = `${this.state.enemyHealth}%`;

        if(this.state.enemyHealth <= 0) {
          enemyHealthDisplay.style.width = "0%";
          this.setState({ victory: true, enemyState: 'Enemy-die' })
          return;
        }else {
          setTimeout(() => {
            this.enemyAttack();
          }, 1000)
        }
      });
    }
  }

  enemyAttack() {
    if(this.state.playerHealth > 0) {
      let attack = this.state.enemyAttack;
      let dmg = this.RNG(attack);

      this.setState({ enemyState: `Enemy-attack` }, () => {
        setTimeout(() => {
          this.setState({ enemyState: `Enemy-idle` })
        }, 1000)
      })

      this.setState({ playerHealth: this.state.playerHealth - dmg }, () => {
        let playerHealthDisplay = document.querySelector('.PlayerHealth-value');
        playerHealthDisplay.style.width = `${this.state.playerHealth}%`;
        if(this.state.playerHealth <= 0) {
          playerHealthDisplay.style.width = "0%";
          this.setState({ defeat: true, playerState: `${this.state.playerClass}-die` })
          return;
        }
      })
    }
  }

  renderVictory() {

    return(
      <div className="Victory">
      </div>
    );
  }

  renderDefeat() {
    console.log("Defeat");
    return(
      <div className="Defeat">
      </div>
    );
  }

  renderEnemy() {
    return(
      <div className="EnemyVitals">
        <h1 className="EnemyName">{this.state.enemyInfo.enemyName}</h1>
        <div className="EnemyHealth-container">
          <div className="EnemyHealth-value" />
        </div>
      </div>
    );
  }

  render() {
    return(
      <div className="Fight">

        <div className="VitalsContainer">
          <div className="PlayerVitals">
            <h1 className="PlayerName">{this.state.characterInfo.characterName}</h1>
            <div className="PlayerHealth-container">
              <div className="PlayerHealth-value" />
            </div>
          </div>

          {this.state.enemyDataRecieved ? this.renderEnemy() : ''}
        </div>
        <div className="PlayerAvatar">
          <div className={`${this.state.playerState}`} />
        </div>

        <div className="EnemyAvatar">
          <div className={`${this.state.enemyState}`} />
        </div>

        {/* Attacks */}
        <button className="AttackOne" onClick={(e) => this.attackOne()}>Attack One</button>

        {this.state.victory ? this.renderVictory() : ''}
        {this.state.defeat ? this.renderDefeat() : ''}
      </div>
    );
  }
};

export default Fight;
