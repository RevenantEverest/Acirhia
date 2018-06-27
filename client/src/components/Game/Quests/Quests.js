import React, { Component } from 'react';
import './Quests.css';

//Services Imports
import questServices from '../../../services/questServices';
import questLogServices from '../../../services/questLogServices';

class Quests extends Component {

  constructor(props) {
    super(props);
    this.state = {
      userData: this.props.userData,
      characterId: this.props.characterId,
      questData: null
    }
  }

  componentDidMount() {
    questServices.getQuests()
      .then(results => {
        this.setState({ questData: results.data }, () => {
          questLogServices.getCharacterQuests(this.props.characterId)
            .then(characterQuests => {
              this.setState({ characterQuests: characterQuests.data, dataRecieved: true });
            })
        });
      })
      .catch(err => console.log("Failed at Get Quests => ", err));
  }

  acceptQuest(elData) {
    let data = {
      userId: this.state.userData.userId,
      characterId: this.state.characterId,
      questName: elData.questName,
      questDescription: elData.questDescription,
      questType: elData.questType,
      requirement: elData.requirement,
      aquired: 0
    }
    questLogServices.acceptQuest(data)
      .then(results => {
        this.componentDidMount();
      })
      .catch(err => console.log("Failed at Accept Quest => ", err))
  }

  renderQuests() {
    let characterQuests = this.state.characterQuests;
    let Quests = this.state.questData.map((el, idx) => {
      if(characterQuests.length >= 1) {
        for(let i = 0; i < characterQuests.length; i++) {
          return(
            <div className="Quests-singleQuest" key={idx}>
              <h1 className="Quest-questName">{el.questName}</h1>
              <h3 className="Quest-questDescription">{el.questDescription}</h3>
              <h3 className="Quest-questRequirements">{el.requirements}</h3>
              {/* {characterQuests[i].questName === el.questName ? <button className="Quests-acceptQuest" disabled>You Already Have This Quest</button> : <button className="Quests-acceptQuest" onClick={(e) => this.acceptQuest(el)}>Accept Quest</button>} */}
            </div>
          );
        }
      }else {
        return(
          <div className="Quests-singleQuest" key={idx}>
            <h1 className="Quest-questName">{el.questName}</h1>
            <h3 className="Quest-questDescription">{el.questDescription}</h3>
            <h3 className="Quest-questRequirements">{el.requirements}</h3>
            <button className="Quests-acceptQuest" onClick={(e) => this.acceptQuest(el)}>Accept Quest</button>
          </div>
        );
      }
    });

    return(
      <div className="Quests-questBoard-container">
        <div className="Quests-questBoard">
          {Quests}
        </div>
      </div>
    );
  }

  render() {
    return(
      <div className="Quests">
        {this.state.dataRecieved ? this.renderQuests() : ''}
        <div className="Town-chooseCharacter" onClick={(e) => this.props.renderTown()} />
      </div>
    );
  }
};

export default Quests;
