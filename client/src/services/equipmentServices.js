import axios form 'axios';
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

export default services;
