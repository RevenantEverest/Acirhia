import React, { Component } from 'react';
import services from '../../services/inventoryServices';
import './Inventory.css';

class Inventory extends Component {

  constructor(props) {
    super(props);
    this.state = {
      userData: this.props.userData,
      characterInfo: this.props.characterInfo,
      inventoryData: null,
      inventoryDataRecieved: false
    }
  }

  componentDidMount() {
    services.getCharacterInventory(this.state.characterInfo.id)
      .then(results => {
        console.log('Character Inventory => ', results.data);
        this.setState({ inventoryData: results.data, inventoryDataRecieved: true });
      })
      .catch(err => console.log('Failed at Get Character Inventory => ', err));
  }

  renderInventory() {
    let Inventory = this.state.inventoryData.map((el, idx) => {
      return(
        <div className="Inventory-object">
          <h3 className="Inventory">{el.itemName}</h3>
        </div>
      );
    });

    return(
      <div className="Inventory-contents">
        {Inventory}
      </div>
    );
  }

  render() {
    return(
      <div className="Inventory">
        <div className="Inventory-contents-container">
          {this.state.inventoryDataRecieved ? this.renderInventory() : <div className="loading" />}
        </div>
        <div className="Inventory-character-gold">
          <div className="Inventory-gold-icon" />
          {this.state.characterInfo.gold}
        </div>
      </div>
    );
  }
};

export default Inventory;
