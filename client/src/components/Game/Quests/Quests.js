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
        this.setState({ questData: results.data, dataRecieved: true });
      })
      .catch(err => console.log("Failed at Get Quests => ", err));
  }

  acceptQuest(id) {

  }

  renderQuests() {
    let Quests = this.state.questData.map((el, idx) => {
      return(
        <div className="Quests-singleQuest">
          <h1 className="Quest-questName">{el.questName}</h1>
          <h3 className="Quest-questDescription">{el.questDescription}</h3>
          <h3 className="Quest-questRequirements">{el.requirements}</h3>
          <button className="Quests-acceptQuest" onClick={(e) => this.acceptQuest(el.id)}>Accept Quest</button>
        </div>
      );
    })

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
      </div>
    );
  }
};

export default Quests;
