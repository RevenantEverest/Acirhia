import React, { Component } from 'react';
import './Equipment.css';

//Services Imports
import equipmentServices from '../../../../../services/equipmentServices';
import characterServices from '../../../../../services/characterServices';

class Equipment extends Component {

  constructor(props) {
    super(props);
    this.state = {
      userData: this.props.userData,
      characterId: this.props.characterId,

      headSlot: { itemName: 'Empty Head Slot' },
      neckSlot: { itemName: 'Empty Neck Slot' },
      backSlot: { itemName: 'Empty Back Slot' },
      handSlot: { itemName: 'Empty Hand Slot' },
      wristSlot: { itemName: 'Empty Wrist Slot' },
      legSlot: { itemName: 'Empty Leg Slot' },

      feetSlot: { itemName: 'Empty Feet Slot' },
      ringOneSlot: { itemName: 'Empty Ring Slot' },
      ringTwoSlot: { itemName: 'Empty Ring Slot' },
      trinketOneSlot: { itemName: 'Empty Trinket Slot' },
      trinketTwoSlot: { itemName: 'Empty Trinket Slot' },
      artifactSlot: { itemName: 'Empty Artifact Slot' },
    }
  }

  componentDidMount() {
    characterServices.getCharacterInfo(this.props.characterId)
      .then(character => {
        this.setState({ characterInfo: character.data[0] }, () => {
          switch(this.state.characterInfo.classId) {
            case 1:
              this.setState({ characterClass: 'Knight' });
              break;
            case 2:
              this.setState({ characterClass: 'Wizard' });
              break;
            case 3:
              this.setState({ characterClass: 'Archer' });
              break;
            default:
              break;
          }
          equipmentServices.getCharacterEquipment(this.props.characterId)
            .then(equipment => {
              this.setState({ equipment: equipment.data }, () => this.renderEquipment());
            })
            .catch(err => console.log("Failed at Get Character Equipment => ", err));
        });
      })
      .catch(err => console.log("Failed at Get Character Info => ", err));
  }

  renderEquipment() {
    let e = this.state.equipment;
    for(let i = 0; i < e.length; i++) {
      switch(e[i].slot) {
        case 'Head':
          this.setState({ headSlot: e[i] });
          break;
        case 'Neck':
          this.setState({ neckSlot: e[i] });
          break;
        case 'Back':
          this.setState({ backSlot: e[i] });
          break;
        case 'Hand':
          this.setState({ handSlot: e[i] });
          break;
        case 'Wrist':
          this.setState({ wristSlot: e[i] });
          break;
        case 'Legs':
          this.setState({ legSlot: e[i] });
          break;
        case 'Feet':
          this.setState({ feetSlot: e[i] });
          break;
        case 'RingOne':
          this.setState({ ringOneSlot: e[i] });
          break;
        case 'RingTwo':
          this.setState({ ringTwoSlot: e[i] });
          break;
        case 'TrinketOne':
          this.setState({ trinketOneSlot: e[i] });
          break;
        case 'TrinketTwo':
          this.setState({ trinketTwoSlot: e[i] });
          break;
        case 'Artifact':
          this.setState({ artifactSlot: e[i] });
          break;
        default:
          break;
      }
    }
  }

  render() {
    return(
      <div className="Equipment">
        <div className="CharacterEquipment-container">
          <div className="CharacterEquipment-left">
            <div className="HeadSlot slot-container-left">
              <div className={`${this.state.headSlot.slot}-slot-icon slot-icon`} />
              <span className="slot-tooltiptext-container-left">
                <h3 className={`slot-tooltiptext-left ${this.state.headSlot.itemRarity}`}>{this.state.headSlot.itemName}</h3>
                <h4 className="slot-tooltiptext-left">{this.state.headSlot.slot}</h4>
                {this.state.headSlot.slot ? <br></br> : ''}
                <h4 className="slot-tooltiptext-left">
                  {this.state.headSlot.attack ? 'Attack:' : ''} {this.state.headSlot.attack}
                </h4>
                <h4 className="slot-tooltiptext-left">
                  {this.state.headSlot.defense ? 'Defense:' : ''} {this.state.headSlot.defense}
                </h4>
                <h4 className="slot-tooltiptext-left">
                  {this.state.headSlot.levelRequirement ? 'Requires Level' : ''} {this.state.headSlot.levelRequirement}
                </h4>
                <h4 className="slot-tooltiptext-left">
                  {this.state.headSlot.worth ? 'Sell Price:' : ''} {this.state.headSlot.worth}
                </h4>
              </span>
            </div>

            <div className="NeckSlot slot-container-left">
              <div className={`${this.state.neckSlot.slot}-slot-icon slot-icon`} />
              <span className="slot-tooltiptext-container-left">
                <h3 className={`slot-tooltiptext-left ${this.state.neckSlot.itemRarity}`}>{this.state.neckSlot.itemName}</h3>
                <h4 className="slot-tooltiptext-left">{this.state.neckSlot.slot}</h4>
                {this.state.neckSlot.slot ? <br></br> : ''}
                <h4 className="slot-tooltiptext-left">
                  {this.state.neckSlot.attack ? 'Attack:' : ''} {this.state.neckSlot.attack}
                </h4>
                <h4 className="slot-tooltiptext-left">
                  {this.state.neckSlot.defense ? 'Defense:' : ''} {this.state.neckSlot.defense}
                </h4>
                <h4 className="slot-tooltiptext-left">
                  {this.state.neckSlot.levelRequirement ? 'Requires Level' : ''} {this.state.neckSlot.levelRequirement}
                </h4>
                <h4 className="slot-tooltiptext-left">
                  {this.state.neckSlot.worth ? 'Sell Price:' : ''} {this.state.neckSlot.worth}
                </h4>
              </span>
            </div>

            <div className="BackSlot slot-container-left">
              <div className={`${this.state.backSlot.slot}-slot-icon slot-icon`} />
              <span className="slot-tooltiptext-container-left">
                <h3 className={`slot-tooltiptext-left ${this.state.backSlot.itemRarity}`}>{this.state.backSlot.itemName}</h3>
                <h4 className="slot-tooltiptext-left">{this.state.backSlot.slot}</h4>
                {this.state.backSlot.slot ? <br></br> : ''}
                <h4 className="slot-tooltiptext-left">
                  {this.state.backSlot.attack ? 'Attack:' : ''} {this.state.backSlot.attack}
                </h4>
                <h4 className="slot-tooltiptext-left">
                  {this.state.backSlot.defense ? 'Defense:' : ''} {this.state.backSlot.defense}
                </h4>
                <h4 className="slot-tooltiptext-left">
                  {this.state.backSlot.levelRequirement ? 'Requires Level' : ''} {this.state.backSlot.levelRequirement}
                </h4>
                <h4 className="slot-tooltiptext-left">
                  {this.state.backSlot.worth ? 'Sell Price:' : ''} {this.state.backSlot.worth}
                </h4>
              </span>
            </div>

            <div className="HandSlot slot-container-left">
              <div className={`${this.state.handSlot.slot}-slot-icon slot-icon`} />
              <span className="slot-tooltiptext-container-left">
                <h3 className={`slot-tooltiptext-left ${this.state.handSlot.itemRarity}`}>{this.state.handSlot.itemName}</h3>
                <h4 className="slot-tooltiptext-left">{this.state.handSlot.slot}</h4>
                {this.state.handSlot.slot ? <br></br> : ''}
                <h4 className="slot-tooltiptext-left">
                  {this.state.handSlot.attack ? 'Attack:' : ''} {this.state.handSlot.attack}
                </h4>
                <h4 className="slot-tooltiptext-left">
                  {this.state.handSlot.defense ? 'Defense:' : ''} {this.state.handSlot.defense}
                </h4>
                <h4 className="slot-tooltiptext-left">
                  {this.state.handSlot.levelRequirement ? 'Requires Level' : ''} {this.state.handSlot.levelRequirement}
                </h4>
                <h4 className="slot-tooltiptext-left">
                  {this.state.handSlot.worth ? 'Sell Price:' : ''} {this.state.handSlot.worth}
                </h4>
              </span>
            </div>

            <div className="WristSlot slot-container-left">
              <div className={`${this.state.wristSlot.slot}-slot-icon slot-icon`} />
              <span className="slot-tooltiptext-container-left">
                <h3 className={`slot-tooltiptext-left ${this.state.wristSlot.itemRarity}`}>{this.state.wristSlot.itemName}</h3>
                <h4 className="slot-tooltiptext-left">{this.state.wristSlot.slot}</h4>
                {this.state.wristSlot.slot ? <br></br> : ''}
                <h4 className="slot-tooltiptext-left">
                  {this.state.wristSlot.attack ? 'Attack:' : ''} {this.state.wristSlot.attack}
                </h4>
                <h4 className="slot-tooltiptext-left">
                  {this.state.wristSlot.defense ? 'Defense:' : ''} {this.state.wristSlot.defense}
                </h4>
                <h4 className="slot-tooltiptext-left">
                  {this.state.wristSlot.levelRequirement ? 'Requires Level' : ''} {this.state.wristSlot.levelRequirement}
                </h4>
                <h4 className="slot-tooltiptext-left">
                  {this.state.wristSlot.worth ? 'Sell Price:' : ''} {this.state.wristSlot.worth}
                </h4>
              </span>
            </div>

            <div className="LegSlot slot-container-left">
              <div className={`${this.state.legSlot.slot}-slot-icon slot-icon`} />
              <span className="slot-tooltiptext-container-left">
                <h3 className={`slot-tooltiptext-left ${this.state.legSlot.itemRarity}`}>{this.state.legSlot.itemName}</h3>
                <h4 className="slot-tooltiptext-left">{this.state.legSlot.slot}</h4>
                {this.state.legSlot.slot ? <br></br> : ''}
                <h4 className="slot-tooltiptext-left">
                  {this.state.legSlot.attack ? 'Attack:' : ''} {this.state.legSlot.attack}
                </h4>
                <h4 className="slot-tooltiptext-left">
                  {this.state.legSlot.defense ? 'Defense:' : ''} {this.state.legSlot.defense}
                </h4>
                <h4 className="slot-tooltiptext-left">
                  {this.state.legSlot.levelRequirement ? 'Requires Level' : ''} {this.state.legSlot.levelRequirement}
                </h4>
                <h4 className="slot-tooltiptext-left">
                  {this.state.legSlot.worth ? 'Sell Price:' : ''} {this.state.legSlot.worth}
                </h4>
              </span>
            </div>
          </div>


          <div className={`${this.state.characterClass}-Silhouette`} />

          <div className="CharacterEquipment-right">
            <div className={`${this.state.feetSlot.slot}-slot-icon slot-icon`} />
            <div className="FeetSlot slot-container-right">
              <span className="slot-tooltiptext-container-right">
                <h3 className={`slot-tooltiptext-right ${this.state.feetSlot.itemRarity}`}>{this.state.feetSlot.itemName}</h3>
                <h4 className="slot-tooltiptext-right">{this.state.feetSlot.slot}</h4>
                {this.state.feetSlot.slot ? <br></br> : ''}
                <h4 className="slot-tooltiptext-right">
                  {this.state.feetSlot.attack ? 'Attack:' : ''} {this.state.feetSlot.attack}
                </h4>
                <h4 className="slot-tooltiptext-right">
                  {this.state.feetSlot.defense ? 'Defense:' : ''} {this.state.feetSlot.defense}
                </h4>
                <h4 className="slot-tooltiptext-right">
                  {this.state.feetSlot.levelRequirement ? 'Requires Level' : ''} {this.state.feetSlot.levelRequirement}
                </h4>
                <h4 className="slot-tooltiptext-right">
                  {this.state.feetSlot.worth ? 'Sell Price:' : ''} {this.state.feetSlot.worth}
                </h4>
              </span>
            </div>

            <div className="RingOneSlot slot-container-right">
              <div className={`${this.state.ringOneSlot.slot}-slot-icon slot-icon`} />
              <span className="slot-tooltiptext-container-right">
                <h3 className={`slot-tooltiptext-right ${this.state.ringOneSlot.itemRarity}`}>{this.state.ringOneSlot.itemName}</h3>
                <h4 className="slot-tooltiptext-right">{this.state.ringOneSlot.slot}</h4>
                {this.state.ringOneSlot.slot ? <br></br> : ''}
                <h4 className="slot-tooltiptext-right">
                  {this.state.ringOneSlot.attack ? 'Attack:' : ''} {this.state.ringOneSlot.attack}
                </h4>
                <h4 className="slot-tooltiptext-right">
                  {this.state.ringOneSlot.defense ? 'Defense:' : ''} {this.state.ringOneSlot.defense}
                </h4>
                <h4 className="slot-tooltiptext-right">
                  {this.state.ringOneSlot.levelRequirement ? 'Requires Level' : ''} {this.state.ringOneSlot.levelRequirement}
                </h4>
                <h4 className="slot-tooltiptext-right">
                  {this.state.ringOneSlot.worth ? 'Sell Price:' : ''} {this.state.ringOneSlot.worth}
                </h4>
              </span>
            </div>

            <div className="RingTwoSlot slot-container-right">
              <div className={`${this.state.ringTwoSlot.slot}-slot-icon slot-icon`} />
              <span className="slot-tooltiptext-container-right">
                <h3 className={`slot-tooltiptext-right ${this.state.ringTwoSlot.itemRarity}`}>{this.state.ringTwoSlot.itemName}</h3>
                <h4 className="slot-tooltiptext-right">{this.state.ringTwoSlot.slot}</h4>
                {this.state.ringTwoSlot.slot ? <br></br> : ''}
                <h4 className="slot-tooltiptext-right">
                  {this.state.ringTwoSlot.attack ? 'Attack:' : ''} {this.state.ringTwoSlot.attack}
                </h4>
                <h4 className="slot-tooltiptext-right">
                  {this.state.ringTwoSlot.defense ? 'Defense:' : ''} {this.state.ringTwoSlot.defense}
                </h4>
                <h4 className="slot-tooltiptext-right">
                  {this.state.ringTwoSlot.levelRequirement ? 'Requires Level' : ''} {this.state.ringTwoSlot.levelRequirement}
                </h4>
                <h4 className="slot-tooltiptext-right">
                  {this.state.ringTwoSlot.worth ? 'Sell Price:' : ''} {this.state.ringTwoSlot.worth}
                </h4>
              </span>
            </div>

            <div className="TrinketOneSlot slot-container-right">
              <div className={`${this.state.trinketOneSlot.slot}-slot-icon slot-icon`} />
              <span className="slot-tooltiptext-container-right">
                <h3 className={`slot-tooltiptext-right ${this.state.trinketOneSlot.itemRarity}`}>{this.state.trinketOneSlot.itemName}</h3>
                <h4 className="slot-tooltiptext-right">{this.state.trinketOneSlot.slot}</h4>
                {this.state.trinketOneSlot.slot ? <br></br> : ''}
                <h4 className="slot-tooltiptext-right">
                  {this.state.trinketOneSlot.attack ? 'Attack:' : ''} {this.state.trinketOneSlot.attack}
                </h4>
                <h4 className="slot-tooltiptext-right">
                  {this.state.trinketOneSlot.defense ? 'Defense:' : ''} {this.state.trinketOneSlot.defense}
                </h4>
                <h4 className="slot-tooltiptext-right">
                  {this.state.trinketOneSlot.levelRequirement ? 'Requires Level' : ''} {this.state.trinketOneSlot.levelRequirement}
                </h4>
                <h4 className="slot-tooltiptext-right">
                  {this.state.trinketOneSlot.worth ? 'Sell Price:' : ''} {this.state.trinketOneSlot.worth}
                </h4>
              </span>
            </div>

            <div className="TrinketTwoSlot slot-container-right">
              <div className={`${this.state.trinketTwoSlot.slot}-slot-icon slot-icon`} />
              <span className="slot-tooltiptext-container-right">
                <h3 className={`slot-tooltiptext-right ${this.state.trinketTwoSlot.itemRarity}`}>{this.state.trinketTwoSlot.itemName}</h3>
                <h4 className="slot-tooltiptext-right">{this.state.trinketOneSlot.slot}</h4>
                {this.state.trinketTwoSlot.slot ? <br></br> : ''}
                <h4 className="slot-tooltiptext-right">
                  {this.state.trinketTwoSlot.attack ? 'Attack:' : ''} {this.state.trinketTwoSlot.attack}
                </h4>
                <h4 className="slot-tooltiptext-right">
                  {this.state.trinketTwoSlot.defense ? 'Defense:' : ''} {this.state.trinketTwoSlot.defense}
                </h4>
                <h4 className="slot-tooltiptext-right">
                  {this.state.trinketTwoSlot.levelRequirement ? 'Requires Level' : ''} {this.state.trinketTwoSlot.levelRequirement}
                </h4>
                <h4 className="slot-tooltiptext-right">
                  {this.state.trinketTwoSlot.worth ? 'Sell Price:' : ''} {this.state.trinketTwoSlot.worth}
                </h4>
              </span>
            </div>

            <div className="ArtifactSlot slot-container-right">
              <div className={`${this.state.artifactSlot.slot}-slot-icon slot-icon`} />
              <span className="slot-tooltiptext-container-right">
                <h3 className={`slot-tooltiptext-right ${this.state.artifactSlot.itemRarity}`}>{this.state.artifactSlot.itemName}</h3>
                <h4 className="slot-tooltiptext-right">{this.state.artifactSlot.slot}</h4>
                {this.state.artifactSlot.slot ? <br></br> : ''}
                <h4 className="slot-tooltiptext-right">
                  {this.state.artifactSlot.attack ? 'Attack:' : ''} {this.state.artifactSlot.attack}
                </h4>
                <h4 className="slot-tooltiptext-right">
                  {this.state.artifactSlot.defense ? 'Defense:' : ''} {this.state.artifactSlot.defense}
                </h4>
                <h4 className="slot-tooltiptext-right">
                  {this.state.artifactSlot.levelRequirement ? 'Requires Level' : ''} {this.state.artifactSlot.levelRequirement}
                </h4>
                <h4 className="slot-tooltiptext-right">
                  {this.state.artifactSlot.worth ? 'Sell Price:' : ''} {this.state.artifactSlot.worth}
                </h4>
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Equipment;
