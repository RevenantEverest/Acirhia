import React, { Component } from 'react';
import './Inventory.css';

//Services Imports
import services from '../../../../services/inventoryServices';
import characterServices from '../../../../services/characterServices';
import itemServices from '../../../../services/itemServices';

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
      let button;
      if(el.itemType === "Weapon" || el.itemType === "Armor") {
        button = <button className="EquipItem" onClick={(e) => this.equipItem(el.itemId)}>Equip Item</button>
      }else if(el.itemType === "Consumeable"){
        button = <button className="UseItem" onClick={(e) => this.useItem({id: el.itemId, itemName: el.itemName})}>Use Item</button>
      }
      return(
        <div className="Inventory-object" key={idx}>
          <h3 className="Inventory">{el.itemName}</h3>
          {button}
        </div>
      );
    });

    return(
      <div className="Inventory-contents">
        {Inventory}
      </div>
    );
  }

  equipItem(id) {
    console.log("Equipping Item ", id);
  }

  useItem(data) {
    itemServices.getItemById(data.id)
      .then(results => {
        if(results.data[0].itemName === "Health Potion") {
          console.log("Inventory Character Info => ",this.state.characterInfo);
          let updateCharacter = {
            characterId: this.state.characterInfo.id,
            userId: this.state.userData.userId,
            characterName: this.state.characterInfo.characterName,
            classId: this.state.characterInfo.classId,
            health: 100,
            attack: this.state.characterInfo.attack,
            defense: this.state.characterInfo.defense,
            exp: this.state.characterInfo.exp,
            lvl: this.state.characterInfo.lvl,
            gold: this.state.characterInfo.gold
          }
          characterServices.updateCharacter(updateCharacter)
            .then(results => {
              this.props.reRenderTown();
            })
            .catch(err => console.log("Failed at Update Character => ", err));
        }
      })
      .catch(err => console.log("Failed at Get Item By Id => ", err));
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
