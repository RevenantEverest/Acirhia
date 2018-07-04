import React, { Component } from 'react';
import './QuestLog.css';

//Servcies Imports
import questLogServices from '../../../services/questLogServices';
import characterServices from '../../../services/characterServices';
import inventoryServices from '../../../services/inventoryServices';
import itemServices from '../../../services/itemServices';

class QuestLog extends Component {

  constructor(props) {
    super(props);
    this.state = {
      userData: this.props.userData,
      characterId: this.props.characterId,
      characterQuests: null
    }
  }

  componentDidMount() {
    characterServices.getCharacterInfo(this.props.characterId)
      .then(character => {
        this.setState({ characterInfo: character.data[0] }, () => {
          questLogServices.getCharacterQuests(this.props.characterId)
            .then(results => {
              this.setState({ characterQuests: results.data, dataRecieved: true });
            })
            .catch(err => console.log("Failed at Get Character Quests => ", err));
        });
      })
      .catch(err => console.log("Failed at Get Character Info => ", err));
  }

  completeQuest(elData) {
    questLogServices.removeQuest(elData.id)
      .then(results => {
        itemServices.getItems()
          .then(items => {
            this.setState({ chosenItem: items.data[this.RNG(items.data.length)] }, () => {
              let num = this.RNG(3);
              switch(num) {
                case 1:
                  let data1 = {
                    userId: this.state.userData.userId,
                    characterId: this.state.characterId,
                    itemId: this.state.chosenItem.id,
                    itemName: this.state.chosenItem.itemName,
                    itemType: this.state.chosenItem.itemType,
                    worth: this.state.chosenItem.worth,
                    exp: this.characterInfo.exp + 100
                  };
                  //Add Item To Character Inventory
                  inventoryServices.addToInventory(data1)
                    .then(inventory => {
                      //Update Character Exp
                      characterServices.updateCharacterExp(data1)
                        .then(character => {
                          this.setState({ renderReward: true, itemReward: true });
                        })
                        .catch(err => console.log("Failed at Update Character Exp => ", err));
                    })
                    .catch(err => console.log("Failed at Add To Inventory => ", err));
                  break;
                case 2:
                  let data2 = {
                    characterId: this.state.characterId,
                    gold: this.state.characterInfo.gold + 100,
                    exp: this.characterInfo.exp + 100
                  };
                  //Update Character Gold
                  characterServices.updateCharacterGold(data2)
                    .then(character => {
                      characterServices.updateCharacterExp(data2)
                        .then(character => {
                          this.setState({ goldReward: 100, renderReward: true });
                        })
                        .catch(err => console.log("Failed at Update Character Exp => ", err));
                    })
                    .catch(err => console.log("Failed at Update Character Gold => ", err));
                  break;
                case 3:
                  let data3 = {
                    userId: this.state.userData.userId,
                    characterId: this.state.characterId,

                    //Inventory Data
                    itemId: this.state.chosenItem.id,
                    itemName: this.state.chosenItem.itemName,
                    itemType: this.state.chosenItem.itemType,
                    worth: this.state.chosenItem.worth,

                    //Character Data
                    gold: this.characterInfo.gold + 50,
                    exp: this.characterInfo.exp + 100
                  };
                  //Update Character Gold
                  characterServices.updateCharacterGold(data3)
                    .then(character => {
                      //Add Item To Inventory
                      inventoryServices.addToInventory(data3)
                        .then(inventory => {
                          characterServices.updateCharacterExp(data3)
                            .then(character => {
                              this.setState({ goldReward: 50, renderReward: true, itemReward: true });
                            })
                            .catch(err => console.log("Failed at Update Character Exp => ", err));
                        })
                        .catch(err => console.log("Failed at Add To Inventory => ", err));
                    })
                    .catch(err => console.log("Failed at Update Character Gold => ", err));
                  break;
                default:
                  break;
              }
            })
          })
          .catch(err => console.log("Failed at Get Items => ", err));
      })
      .catch(err => console.log("Failed at Remove Quest => ", err));
  }

  abandonQuest(elData) {
    questLogServices.removeQuest(elData.id)
      .then(results => {

      })
      .catch(err => console.log("Failed at Remove Quest => ", err));
  }

  RNG(int) { let num = Math.floor(Math.random() * int); return num; }

  renderQuestLog() {
    let QuestLog = this.state.characterQuests.map((el, idx) => {
        return(
          <div className="QuestLog-quest" key={idx}>
            <h3 className="QuestLog-questName">{el.questName}</h3>
            <h3 className="QuestLog-questType">{el.questType}</h3>
            <h3 className="QuestLog-requirements">
              Requirements: {el.acquired >= el.requirement ? el.requirement : el.acquired} / {el.requirement}
          </h3>
            {el.aquired >= el.requirement ? <button className="QuestLog-completeQuest" onClick={(e) => this.completeQuest(el)}>Complete Quest</button> : <button className="QuestLog-abandonQuest" onClick={(e) => this.abandonQuest(el)}>Abandon Quest</button>}
          </div>
        );
      });

    return(
      <div className="QuestLog-container">
        <div className="QuestLog-contents">
          {QuestLog}
        </div>
      </div>
    );
  }

  renderReward() {
    return(
      <div className="QuestLog-reward">
        {this.state.itemReward ? <h3 className="QuestLog-reward-item">{this.state.chosenItem.itemName}</h3> : ''}
        {this.state.goldReward ? <h3 className="QuestLog-reward-gold">Gold: {this.state.goldReward}</h3> : ''}
        <h3 className="QuestLog-reward-exp">Exp Gained: 100</h3>
      </div>
    );
  }

  render() {
    return(
      <div className="QuestLog">
        {this.state.dataRecieved ? this.renderQuestLog() : <div className="loading" />}
        {this.state.renderReward ? this.renderReward() : <div className="loading" />}
      </div>
    );
  }
};

export default QuestLog;
