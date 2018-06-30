import React, { Component } from 'react';

//CSS Imports
import './Fight.css';
import './FightStates.css';
import './FightEnemyStates.css';

//Service Imports
import enemyServices from '../../../services/enemyServices';
import itemServices from '../../../services/itemServices';
import inventoryServices from '../../../services/inventoryServices';
import characterServices from '../../../services/characterServices';
import levelUpServices from '../../../services/levelUpServices';

//Component Imports
import ItemReward from './ItemReward/ItemReward';
import Attacks from './Attacks/Attacks';

class Fight extends Component {

  constructor(props) {
    super(props);
    this.state = {
      userData: this.props.userData,
      characterId: this.props.characterId,

      enemyState: 'Enemy-idle',
      canAttack: true,

      /* Player Stats */
      playerHealth: null
    }
    this.playerAttack = this.playerAttack.bind(this);
  }

  componentDidMount() {
    characterServices.getCharacterInfo(this.props.characterId)
      .then(results => {
        this.setState({ characterInfo: results.data[0], playerHealth: results.data[0].health, characterInfoRecieved: true }, () => {
          let playerHealth = document.querySelector('.PlayerHealth-value');
          playerHealth.style.width = `${this.state.characterInfo.health}%`;
        });
        switch(this.state.characterInfo.classId) {
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
        enemyServices.getEnemies()
          .then(results => {
            let enemyChosen = results.data[this.RNG(results.data.length)];
            this.setState({
              enemyInfo: enemyChosen,
              enemyName: enemyChosen.enemyName,
              enemyHealth: enemyChosen.health,
              enemyAttack: enemyChosen.attack,
              enemyDefense: enemyChosen.defense,
              enemyDataRecieved: true,
              enemyState: 'Enemy-idle'
            });
          })
          .catch(err => console.log("Failed at Get Enemies => ", err));
      })
      .catch(err => console.log("Failed at Get Character Info => ", err))
  }

  RNG(int) { let num = Math.floor(Math.random() * int); return num; }

  playerAttack(dmg) {
    if(this.state.enemyHealth > 0 && this.state.canAttack) {
      this.setState({ canAttack: false });

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
        characterServices.updateCharacterHealth({ characterId: this.state.characterInfo.id, health: this.state.playerHealth - dmg })
          .then(results => {

          })
          .catch(err => console.log("Failed at Update Character => ", err));
        if(this.state.playerHealth <= 0) {
          playerHealthDisplay.style.width = "0%";
          this.setState({ defeat: true, playerState: `${this.state.playerClass}-die` })
          return;
        }
      })
    }
  }

  itemReward() {
    //Get Items
    itemServices.getItems()
      .then(results => {
        let chosenItem = results.data[this.RNG(results.data.length)];
        this.setState({ itemReward: chosenItem }, () => {
          let inventoryData = {
            userId: this.state.userData.userId, characterId: this.state.characterInfo.id,
            itemId: this.state.itemReward.id, itemName: this.state.itemReward.itemName,
            itemDescription: this.state.itemReward.itemDescription,
            itemType: this.state.itemReward.itemType, itemRarity: this.state.itemReward.itemRarity,
            attack: this.state.itemReward.attack, defense: this.state.itemReward.defense,
            levelRequirement: this.state.itemReward.levelRequirement, worth: this.state.itemReward.worth
          };
          //Add item to inventory
          inventoryServices.addToInventory(inventoryData)
            .then(results => {
              this.setState({
                rewards: {
                  item: this.state.itemReward,
                  exp: 100,
                  gold: 50
                }
              }, () => {
                characterServices.updateCharacterGold({ characterId: this.state.characterId, gold: this.state.characterInfo.gold + this.state.rewards.gold })
                  .then(characterGold => {
                    characterServices.updateCharacterExp({ characterId: this.state.characterId, exp: this.state.characterInfo.exp + this.state.rewards.exp })
                      .then(characterExp => {
                        if(levelUpServices.checkForLevelUp({ exp: this.state.characterInfo.exp + this.state.rewards.exp, level: this.state.characterInfo.lvl })) {
                          this.setState({ levelUp: true, victory: false }, () => this.updateLevel())
                        }else {
                          this.setState({ levelUp: false, renderRewards: true });
                        }
                      })
                      .catch(err => console.log("Failed at Update Character Exp => ", err));
                  })
                  .catch(err => console.log("Failed at Update Character Gold => ", err));
              });
            })
            .catch(err => console.log('Failed at Add to Inventory => ', err));
        });
      })
      .catch(err => console.log('Failed at Get Items => ', err));
  }

  updateLevel() {
    characterServices.updateCharacterLevel({ characterId: this.state.characterInfo.id, lvl: this.state.characterInfo.lvl + 1 })
      .then(results => {
        setTimeout(() => {
          this.setState({
            levelUp: false,
            victory: true,
            renderRewards: true
          })
        }, 3000)
      })
      .catch(err => console.log("Failed at Update Character => ", err));
  }

  renderLevelUp() {
    return(
      <div className="LevelUp" />
    );
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

  renderEnemyVitals() {
    return(
      <div className="EnemyVitals">
        <h1 className="EnemyName">{this.state.enemyInfo.enemyName}</h1>
        <div className="EnemyVitals-heart-icon" />
        <div className="EnemyHealth-container">
          <div className="EnemyHealth-value" />
        </div>
      </div>
    );
  }

  renderVitals() {
    return(
      <div className="PlayerVitals">
        <h1 className="PlayerName">{this.state.characterInfo.characterName}</h1>
        <div className="PlayerVitals-heart-icon" />
        <div className="PlayerHealth-container">
          <div className="PlayerHealth-value" />
        </div>
      </div>
    );
  }

  renderRewards() {
    return(
      <div className="simpleModal-itemReward">
        <div className="modalContent-itemReward">
          <h1 className="modalHeading-itemReward">Rewards</h1>
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
          {this.state.characterInfoRecieved ? this.renderVitals() : ''}


          {this.state.enemyDataRecieved ? this.renderEnemyVitals() : ''}
        </div>
        <div className="PlayerAvatar">
          <div className={`${this.state.playerState}`} />
        </div>

        <div className="EnemyAvatar">
          <div className={`${this.state.enemyState}`} />
        </div>

        {/* Attacks */}
        {this.state.enemyDataRecieved ? <Attacks userData={this.state.userData} characterId={this.state.characterId}
                                          enemyData={this.state.enemyInfo} playerAttack={this.playerAttack} /> : <div className="loading" />}

        {this.state.levelUp ? this.renderLevelUp() : ''}
        {this.state.victory ? this.renderVictory() : ''}
        {this.state.defeat ? this.renderDefeat() : ''}
        {this.state.renderRewards ? this.renderRewards() : ''}
      </div>
    );
  }
};

export default Fight;
