import axios from 'axios';
const services = {};

services.getEquipment = (data) => {
  return axios.get('/gear/equipment');
};

services.getCharacterEquipment = (data) => {
  return axios.get(`/gear/equipment/characters/${data}`);
};

services.addEquipment = (data) => {
  return axios({
    method: 'POST',
    url: '/gear/equipment',
    data: {
      userId: data.userId,
      characterId: data.characterId,
      itemId: data.itemId,
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
  })
};

services.removeEquipment = (data) => {
  return axios({
    method: 'DELETE',
    url: `/gear/equipment/${data}`
  })
};

services.removeCharacterEquipment = (data) => {
  return axios({
    method: 'DELETE',
    url: `/gear/equipment/character/${data}`
  })
};

export default services;
