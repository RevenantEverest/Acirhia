import React, { Component } from 'react';
import './InventoryShop.css';

//Services Imports
import inventoryServices from '../../../../services/inventoryServices';
import characterServices from '../../../../services/characterServices';

class InventoryShop extends Component {

  constructor(props) {
    super(props);
    this.state = {
      userData: this.props.userData,
      characterId: this.props.characterId,
      characterInfo: null
    }
  }

  componentDidMount() {
    characterServices.getCharacterInfo(this.props.characterId)
      .then(results => {
        this.setState({ characterInfo: results.data[0] });

        inventoryServices.getCharacterInventory(this.props.characterId)
          .then(inventoryData => {
            console.log("Inventory Shop Data => ", inventoryData.data);
            this.setState({
              inventoryData: inventoryData.data,
              dataRecieved: true
            });
          })
          .catch(err => console.log("Failed at Get Inventory =>", err));
      })
      .catch(err => console.log("Failed at Get Character Info => ", err));
  }

  renderInventory() {
    let Inventory = this.state.inventoryData.map((el, idx) => {
      return(
        <div className="InventoryShop-item" key={idx}>
          <h3 className="InventoryShop-item-name">{el.itemName}</h3>
          <h4 className="InventoryShop-item-type">{el.itemType}</h4>
          <h4 className="InventoryShop-item-worth">Worth: {el.worth}</h4>
          <button className="InventoryShop-sellItem" onClick={(e) => this.sellItem(({ id: el.id, worth: el.worth }))}>Sell</button>
        </div>
      );
    });

    return(
      <div className="InventoryShop-container">
        <div className="InventoryShop-contents-container">
          <div className="InventoryShop-contents">
            {Inventory}
          </div>
        </div>
        <div className="InventoryShop-gold-icon" />
        <h2 className="InventoryShop-gold">{this.state.characterInfo.gold}</h2>
      </div>
    );
  }

  sellItem(data) {
    inventoryServices.removeFromInventory(data.id)
      .then(results => {
        let updateCharacter = {
          characterId: this.state.characterId,
          gold: this.state.characterInfo.gold + data.worth
        };
        characterServices.updateCharacterGold(updateCharacter)
          .then(results => {
            this.componentDidMount();
          })
          .catch(err => console.log("Failed at Update Character Gold => ", err));
      })
      .catch(err => console.log("Failed at Remove From Inventory => ", err));
  }

  render() {
    return(
      <div className="InventoryShop">
        {this.state.dataRecieved ? this.renderInventory() : ''}
      </div>
    );
  }
};

export default InventoryShop;
