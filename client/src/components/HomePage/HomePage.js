import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
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
        <div className="HomePage-NavBar">
          <Link to="/login">Login</Link>
        </div>
        <button className="HomePage-Play" onClick={(e) => this.playGame()}>Play</button>
        {this.state.fireRedirect ? <Redirect to="/game" /> : ''}
      </div>
    );
  }
};

export default HomePage;
