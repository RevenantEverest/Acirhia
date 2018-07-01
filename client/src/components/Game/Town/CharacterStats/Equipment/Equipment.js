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
      characterId: this.props.characterId
    }
  }

  componentDidMount() {
    characterServices.getCharacterInfo(this.props.characterId)
      .then(character => {
        this.setState({ characterInfo: character.data[0] }, () => {
          equipmentServices.getCharacterEquipment(this.props.characterId)
            .then(equipment => {
              this.setState({ equipment: equipment.data, dataRecieved: true });
            })
            .catch(err => console.log("Failed at Get Character Equipment => ", err));
        });
      })
      .catch(err => console.log("Failed at Get Character Info => ", err));
  }

  renderEquipment() {
    let Equipment = this.state.equipment.map((el, idx) => {
      return(
        <div className="">
        </div>
      );
    });

    return(
      <div className="Equipment-container">
        <div className="Equipment-contents">\
          {Equipment}
        </div>
      </div>
    );
  }

  render() {
    return(
      <div className="Equipment">
        {this.state.dataRecieved ? this.renderEquipment() : <div className="loading" />}
      </div>
    );
  }
};

export default Equipment;
