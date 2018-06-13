import React, { Component } from 'react';
import './Arena.css';

class Arena extends Component {

  render() {
    return(
      <div className="Arena">
        <div className="Town-chooseCharacter" onClick={(e) => this.props.renderTown()} />
      </div>
    );
  }
};

export default Arena;
