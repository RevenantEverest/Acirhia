import React, { Component } from 'react';
import './Shop.css';

//Component Imports
import InventoryShop from './InventoryShop/InventoryShop';

//Services Imports
import itemServices from '../../../services/itemServices';
import characterServices from '../../../services/characterServices';
import inventoryServices from '../../../services/inventoryServices';

class Shop extends Component {

  constructor(props) {
    super(props);
    this.state = {
      userData: this.props.userData,
      characterId: this.props.characterId,
      stock: null
    }
  }

  componentDidMount() {
    if(this.state.stock == null) {
      itemServices.getItems()
        .then(results => {
          let arr = [];
          console.log(results.data.length);
          for(let i = 0; i < 8; i++) {
            arr.push(results.data[this.RNG(results.data.length)]);
          }
          this.setState({ stock: arr, stockRecieved: true, renderInventory: true });

          characterServices.getCharacterInfo(this.props.characterId)
            .then(results => {
              this.setState({ characterInfo: results.data });
            })
            .catch(err => console.log("Failed at Get Character Info => ", err));
        })
        .catch(err => console.log("Failed at Get Items => ", err));
    }else {
      this.setState({ renderInventory: true });
    }
  }

  RNG(int) { let num = Math.floor(Math.random() * int); return num; }

  buyItem(data) {
    characterServices.getCharacterInfo(this.state.characterId)
      .then(info => {
        this.setState({ characterInfo: info.data[0] }, () => {
          if(this.state.characterInfo.gold < data.worth) {
            this.setState({ insufficientFunds: true });
          }else if(this.state.characterInfo.gold >= data.worth){
            let updateCharacter = {
              characterId: this.state.characterId,
              gold: this.state.characterInfo.gold - data.worth
            }
            characterServices.updateCharacterGold(updateCharacter)
              .then(updatedGold => {
                let inventory = {
                  userId: this.state.userData.userId,
                  characterId: this.state.characterId,
                  itemId: data.id,
                  itemName: data.itemName,
                  itemDescription: data.itemDescription,
                  itemType: data.itemType,
                  itemRarity: data.itemRarity,
                  attack: data.attack,
                  defense: data.defense,
                  levelRequirement: data.levelRequirement,
                  slot: data.slot,
                  worth: data.worth
                }
                inventoryServices.addToInventory(inventory)
                  .then(results => {
                    this.setState({ renderInventory: false }, () => this.componentDidMount());
                  })
                  .catch(err => console.log("Failed at Add To Inventory => ", err));
              })
              .catch(err => console.log("Failed at Update Character Gold => ", err));
          }
        })
      })
      .catch(err => console.log("Failed at Get Character Info => ", err));
  }

  renderStock() {
    let Stock = this.state.stock.map((el, idx) => {
      return(
        <div className="Stock-item" key={idx}>
          <div className="Stock-item-icon-container ItemIcon" onClick={(e) => this.buyItem(el)}>
            <span className="Stock-item-tooltiptext-container">
              <h3 className={`Stock-item-tooltiptext ${el.itemRarity}`}>{el.itemName}</h3>
              <h4 className="Stock-item-tooltiptext">{el.itemType}</h4>
              <h4 className="Stock-item-tooltiptext">Gold: {el.worth}</h4>
            </span>
            <div className={`${el.itemType}-icon `} />
          </div>
        </div>
      );
    });

    return(
      <div className="Stock-container">
        <div className="Stock-items-container">
          {Stock}
        </div>
      </div>
    );
  }

  renderInventory() {
    return(
      <div className="Shop-inventory-container">
        <h1 className="Shop-inventory-header">Inventory</h1>
        <InventoryShop characterId={this.props.characterId} />
      </div>
    );
  }

  renderInsufficientFunds() {
    setTimeout(() => {
      this.setState({ insufficientFunds: false });
    }, 1000);
    return(
      <div className="Shop-insufficientFunds">
        <h1 className="Shop-insufficientFunds-text">Not Enough Gold</h1>
      </div>
    );
  }

  render() {
    return(
      <div className="Shop">
        <div className="Shop-town" onClick={(e) => this.props.renderTown()} />
        {this.state.stockRecieved ? this.renderStock() : ''}
        {this.state.renderInventory ? this.renderInventory() : ''}
        {this.state.insufficientFunds ? this.renderInsufficientFunds() : ''}
      </div>
    );
  }
};

export default Shop;
