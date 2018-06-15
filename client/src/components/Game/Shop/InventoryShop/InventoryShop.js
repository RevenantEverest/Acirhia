import React, { Component } from 'ract';
import './InventoryShop.css';

class InventoryShop extends Component {

  constructor(props) {
    super(props);
    this.state = {
      userData: this.props.userData,
      characterInfo: this.state.characterInfo
    }
  }

  render() {
    return(
      <div className="InventoryShop">
      </div>
    );
  }
};

export default InventoryShop;
