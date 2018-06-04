import React, { Component } from 'react';
import './Fight.css';

class Fight extends Component {

  constructor(props) {
    super(props);
    this.state = {
      userData: this.props.userData,
      characterInfo: this.props.characterInfo
    }
  }

  componentDidMount() {
    console.log("Important Data Character => ", this.state.characterInfo);
    console.log("Important Data User => ", this.state.userData);
    services.getEnemies()
      .then(results => {
        console.log("Enemies =>", results.data);
      })
      .catch(err => console.log("Failed at Get Enemies => ", err))
  }

  RNG(int) { let num = Math.floor(Math.random() * int); return num; }

  render() {
    return(
      <div className="Fight">

        <div className="VitalsContainer">
          <div className="PlayerVitals">
            <h1 className="PlayerName">{this.state.characterInfo.characterName}</h1>
            <div className="PlayerHealth-container" />
            <div className="PlayerHealth-value" />
          </div>

          <div className="EnemyVitals">
            <h1 className="EnemyName">{this.state.enemyInfo.enemyName}</h1>
            <div className="EnemyHealth-container" />
            <div className="EnemyHealth-value" />
          </div>
        </div>

        <div className="PlayerAvatar">
          <div className={`${this.state.playerState}`} />
        </div>

        <div className="EnemyAvatar">
          <div className={`${this.state.enemyState}`} />
        </div>

      </div>
    );
  }
};

export default Fight;
