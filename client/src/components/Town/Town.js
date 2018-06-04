import React, { Component } from 'react';
import './Town.css';

class Town extends Component {

  constructor(props) {
    super(props);
    this.state = {
      userData: this.props.userData,
      characterInfo: this.props.characterInfo,
      renderAvatar: null
    }
  }

  componentDidMount() {
    console.log("Important Data Character => ", this.state.characterInfo);
    console.log("Important Data User => ", this.state.userData);
    switch(this.state.characterInfo.classID) {
      case 1:
        this.setState({ renderAvatar: 'KnightAvatar' })
        break;
      case 2:
        this.setState({ renderAvatar: 'WizardAvatar' })
        break;
      case 3:
        this.setState({ renderAvatar: 'ArcherAvatar' })
        break;
      default:
        break;
    }
  }

  render() {
    return(
      <div className="Town">
        <button className="Town-chooseCharacter" onClick={(e) => this.props.renderChooseCharacter()}>Choose Character</button>
        <button className="Town-shop" onClick={(e) => this.props.renderShop()}>Shop</button>
        <button className="Town-fight" onClick={(e) => this.props.renderFight()}>Fight</button>
        <button className="Town-arena" onClick={(e) => this.props.renderArena()}>Arena</button>
        <div className="Town-Avatar">
          <div className={`${this.state.renderAvatar}`} />
        </div>
      </div>
    );
  }
};

export default Town;
