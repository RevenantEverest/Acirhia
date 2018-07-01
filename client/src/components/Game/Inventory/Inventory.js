import React, { Component } from 'react';
import './Inventory.css';

//Services Imports
import inventoryServices from '../../../services/inventoryServices';
import characterServices from '../../../services/characterServices';
import itemServices from '../../../services/itemServices';
import equipmentServices from '../../../services/equipmentServices';

class Inventory extends Component {

  constructor(props) {
    super(props);
    this.state = {
      userData: this.props.userData,
      characterId: this.props.characterId,
      inventoryData: null,
      inventoryDataRecieved: false
    }
  }

  componentDidMount() {
    characterServices.getCharacterInfo(this.props.characterId)
      .then(character => {
        this.setState({ characterInfo: character.data[0] }, () => {
          equipmentServices.getCharacterEquipment(this.props.characterId)
            .then(equipment => {
              this.setState({ equipment: equipment.data }, () => {
                inventoryServices.getCharacterInventory(this.state.characterInfo.id)
                  .then(results => {
                    console.log('Character Inventory => ', results.data);
                    this.setState({ inventoryData: results.data, inventoryDataRecieved: true });
                  })
                  .catch(err => console.log('Failed at Get Character Inventory => ', err));
              });
            })
            .catch(err => console.log("Failed at Get Character Equipment => ", err));
        })
      })
      .catch(err => console.log("Failed at Get Character Info => , err"));
  }

  renderInventory() {
    let Inventory = this.state.inventoryData.map((el, idx) => {
      let button;
      if(el.itemType === "Weapon" || el.itemType === "Armor") {
        button = <button className="EquipItem" onClick={(e) => this.equipItem(el)}>Equip Item</button>
      }else if(el.itemType === "Consumable"){
        button = <button className="UseItem" onClick={(e) => this.useItem(el)}>Use Item</button>
      }
      for(let i = 0; i < this.state.equipment.length; i++) {
        if(this.state.equipment[i].itemName === el.itemName)
          button = <button className="UnEquipItem" onClick={(e) => this.unEquip({id: this.state.equipment[i].id, el: el})}>Unequip</button>;
      }
      return(
        <div className="Inventory-object-container" key={idx}>
          <div className="Inventory-object">
            <div className={`Inventory-${el.itemType}-icon`}>
              <span className="Inventory-tooltiptext-container">
                <h4 className={`Inventory-tooltiptext ${el.itemRarity}`}>{el.itemName}</h4>
                {this.state.characterInfo.lvl < el.levelRequirement ? <h4 className="Inventory-tooltiptext reqLevel">Requires Level: {el.levelRequirement}</h4> : ''}
              </span>
            </div>
          </div>
          {button}
        </div>
      );
    });

    return(

      <div className="Inventory-contents-container">
        <div className="Inventory-contents">
          {Inventory}
        </div>
        <div className="Inventory-character-gold">
          <div className="Inventory-gold-icon" />
          {this.state.characterInfo.gold}
        </div>
      </div>
    );
  }

  equipItem(el) {
    if(this.state.characterInfo.lvl >= el.levelRequirement) {
      if(this.state.equipment.length > 0) {
        for(let i = 0; i < this.state.equipment.length; i++) {
          if(this.state.equipment[i].slot === el.slot) {
            this.setState({ cannotEquip: true });
            return;
          }else {
            equipmentServices.addEquipment({
              userId: this.state.userData.userId,
              characterId: this.state.characterId,
              itemId: el.itemId,
              itemName: el.itemName,
              itemDescription: el.itemDescription,
              itemType: el.itemType,
              itemRarity: el.itemRarity,
              attack: el.attack,
              defense: el.defense,
              levelRequirement: el.levelRequirement,
              slot: el.slot,
              worth: el.worth
            }).then(results => {
              characterServices.updateCharacterStats({
                characterId: this.state.characterId,
                attack: this.state.characterInfo.attack + el.attack,
                defense: this.state.characterInfo.defense + el.defense
              })
                .then(character => {
                  this.componentDidMount();
                  this.props.reRenderStats();
                })
                .catch(err => console.log("Failed at Update Character Stats => ", err));
            })
            .catch(err => console.log("Failed at Add Equipment => ", err));
          }
        }
      }else  {
        equipmentServices.addEquipment({
          userId: this.state.userData.userId,
          characterId: this.state.characterId,
          itemId: el.itemId,
          itemName: el.itemName,
          itemDescription: el.itemDescription,
          itemType: el.itemType,
          itemRarity: el.itemRarity,
          attack: el.attack,
          defense: el.defense,
          levelRequirement: el.levelRequirement,
          slot: el.slot,
          worth: el.worth
        }).then(results => {
          characterServices.updateCharacterStats({
            characterId: this.state.characterId,
            attack: this.state.characterInfo.attack + el.attack,
            defense: this.state.characterInfo.defense + el.defense
          })
            .then(character => {
              this.componentDidMount();
              this.props.reRenderStats(false);
            })
            .catch(err => console.log("Failed at Update Character Stats => ", err));
        })
        .catch(err => console.log("Failed at Add Equipment => ", err));
      }
    }else {
      this.setState({ cannotEquip: true });
    }
  }

  unEquip(data) {
    equipmentServices.removeEquipment(data.id)
      .then(equipment => {
        characterServices.updateCharacterStats({
          characterId: this.state.characterId,
          attack: this.state.characterInfo.attack - data.el.defense,
          defense: this.state.characterInfo.defense - data.el.defense,
        })
        .then(character => {
          this.componentDidMount();
          this.props.reRenderStats(false);
        })
        .catch(err => console.log("Failed at Update Character Stats => ", err));
      })
      .catch(err => console.log("Failed at Remove Equipment => ", err));
  }

  useItem(data) {
    itemServices.getItemById(data.id)
      .then(results => {
        if(results.data[0].itemName === "Health Potion") {
          console.log("Inventory Character Info => ",this.state.characterInfo);
          let updateCharacter = {
            characterId: this.state.characterInfo.id,
            health: this.state.characterInfo.health + 50
          }
          characterServices.updateCharacterHealth(updateCharacter)
            .then(results => {
              this.props.reRenderStats(false);
            })
            .catch(err => console.log("Failed at Update Character => ", err));
        }
      })
      .catch(err => console.log("Failed at Get Item By Id => ", err));
  }

  renderCannotEquip() {
    setTimeout(() => {
      this.setState({ cannotEquip: false });
    }, 1000);
    return(
      <div className="CannotEquip" />
    );
  }

  render() {
    return(
      <div className="Inventory">
        {this.state.inventoryDataRecieved ? this.renderInventory() : <div className="loading" />}
        {this.state.cannotEquip ? this.renderCannotEquip() : ''}
      </div>
    );
  }
};

export default Inventory;
