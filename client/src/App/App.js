import React, { Component } from 'react';
import './App.css';

//Component Imports
import HomePage from '../components/HomePage/HomePage';
import Login from '../components/Login/Login';
import Register from '../components/Register/Register';

import Game from '../components/Game/Game';

import TileBoard from '../components/Game/Town/TileBoard/TileBoard';

class App extends Component {

  constructor() {
    super();
    this.state = {
      userData: {
        userId: 1
      }
    }
    this.renderGame = this.renderGame.bind(this);
  }

  renderGame() {
    this.setState({ renderGame: true })
  }

  render() {
    return (
      <div className="App">
          <div className="AppContents">
            {this.state.renderGame ? <Game userData={this.state.userData} /> : <HomePage userData={this.state.userData} renderGame={this.renderGame}/>}
          </div>
      </div>
    );
  }
}

export default App;
