import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

//Component Imports
import HomePage from '../components/HomePage/HomePage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div className="AppContents">
            <Route exact path="/" component={HomePage} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
