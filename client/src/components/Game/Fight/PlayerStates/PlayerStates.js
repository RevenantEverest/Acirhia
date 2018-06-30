import React, { Component } from 'react';
import './PlayerStates.css';

class PlayerStates extends Component {

  constructor(props) {
    super(props);
    this.state = {
      userData: this.props.userData,
      characterId: this.props.characterId,

      playerStates: [

      ],

      currentState: null,
    }
  }

  componentDidMount() {

  }

  render() {
    return(
      <div className="PlayerStates">
      </div>
    );
  }
}
