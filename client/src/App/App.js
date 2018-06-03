import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

//Component Imports
import HomePage from '../components/HomePage/HomePage';
import Login from '../components/Login/Login';
import Register from '../components/Register/Register';

import Game from '../components/Game/Game';

class App extends Component {

  constructor() {
    super();
    this.state = {
      userData: {
        userId: 1
      }
    }
  }

  render() {
    return (
      <div className="App">
        <Router>
          <div className="AppContents">
            <Route exact path="/" component={
              () => (<HomePage userData={this.state.userData} />)
            } />

            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />

            <Route exact path="/game" component={
              () => (<Game userData={this.state.userData} />)
            } />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
