import React, { Component } from 'react';
import './TileBoard.css';

class TileBoard extends Component {

  componentDidMount() {
    this.updateCanvas();
  }

  updateCanvas() {
    let ctx = this.refs.canvas.getContext('2d');
    ctx.fillRect(0,0,1200,700);
  }

  render() {
    return(
      <div className="TileBoard">
        <canvas ref="canvas" width={1200} height={700} />
      </div>
    );
  }
};

export default TileBoard;
