import React, { Component } from 'react';
import './Fight.css';
import './FightStates.css';
import './FightEnemyStates.css';

//Service Imports
import enemyServices from '../../services/enemyServices';
import itemServices from '../../services/itemServices';
import inventoryServices from '../../services/inventoryServices';

//Component Imports
import ItemReward from '../../components/ItemReward/ItemReward';

class Fight extends Component {

  constructor(props) {
    super(props);
    this.state = {
      userData: this.props.userData,
      characterInfo: this.props.characterInfo,

      enemyState: 'Enemy-idle',
      canAttack: true,

      /* Player Stats */
      playerHealth: this.props.characterInfo.health
    }
  }

  componentDidMount() {
    enemyServices.getEnemies()
      .then(results => {
        let enemyChosen = results.data[this.RNG(results.data.length)];
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
    if(this.state.enemyHealth > 0 && this.state.canAttack) {
      this.setState({ canAttack: false });

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
          this.setState({ victory: true, enemyState: 'Enemy-die' });
          this.itemReward();
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
          this.setState({ enemyState: `Enemy-idle`, canAttack: true });
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

  itemReward() {
    itemServices.getItems()
      .then(results => {
        let chosenItem = results.data[this.RNG(results.data.length)];
        this.setState({ itemReward: chosenItem }, () => {
          let data = {
            userId: this.state.userData.userId,
            characterId: this.state.characterInfo.id,
            itemId: this.state.itemReward.id,
            itemName: this.state.itemReward.itemName,
            itemType: this.state.itemReward.itemType,
            worth: this.state.itemReward.worth
          }
          inventoryServices.addToInventory(data)
            .then(results => {
              setTimeout(() => {
                this.setState({
                  rewards: {
                    item: this.state.itemReward,
                    exp: 100,
                    gold: 50
                  },
                  renderRewards: true
                });
              }, 2000)
            })
            .catch(err => console.log('Failed at Add to Inventory => ', err));
        });
      })
      .catch(err => console.log('Failed at Get Items => ', err));
  }

  renderVictory() {
    return(
      <div className="Victory" />
    );
  }

  renderDefeat() {
    return(
      <div className="Defeat">
        <div className="Defeat-Image" />
        <button classname="Defeat-continue" onClick={(e) => this.props.renderTown()}>Continue</button>
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

  renderRewards() {
    return(
      <div className="simpleModal-itemReward">
        <div className="modalContent-itemReward">
          <h1 className="modalHeading-itemReward">Inventory</h1>
          <div className="Game-itemReward-container">
            <ItemReward rewards={this.state.rewards} />
            <button className="Item-Reward-continue" onClick={(e) => this.props.renderTown()}>Continue</button>
          </div>
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
        <div className="AttackOne" onClick={(e) => this.attackOne()} />

        {this.state.victory ? this.renderVictory() : ''}
        {this.state.defeat ? this.renderDefeat() : ''}
        {this.state.renderRewards ? this.renderRewards() : ''}
      </div>
    );
  }
};

export default Fight;
