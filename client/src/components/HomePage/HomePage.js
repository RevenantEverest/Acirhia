import React, { Component } from 'react';
import './HomePage.css';

class HomePage extends Component {

  constructor() {
    super();
    this.state = {
      fireRedirect: false
    }
  }

  playGame() { this.setState({ fireRedirect: true }); }

  render() {
    return(
      <div className="HomePage">
        <div className="HomePage-vignette">
          <div className="HomePage-NavBar">
            <div className="RE-Logo" />
            <h1 className="RE-Text">RevenantEverest</h1>
            <div className="HomePage-Account-container">
              <h1 className="HomePage-Account-header">Account</h1>
              <div className="HomePage-Account-dropdown">
              </div>
            </div>
          </div>
          <div className="HomePage-Logo" />
          <div className="HomePage-header-container">
            <button className="HomePage-Play" onClick={(e) => this.playGame()}>Start</button>
          </div>
          {this.state.fireRedirect ? this.props.renderGame() : ''}
        </div>
      </div>
    );
  }
};

export default HomePage;
