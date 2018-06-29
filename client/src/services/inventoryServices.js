import axios from 'axios';
const services = {};

services.getAllUserInventory = (data) => {
  return axios.get(`/tasks/inventory/users/${data}`);
};

services.getCharacterInventory = (data) => {
  return axios.get(`/tasks/inventory/characters/${data}`);
};

services.addToInventory = (data) => {
  return axios({
    method: 'POST',
    url: '/tasks/inventory',
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

services.removeFromInventory = (data) => {
  return axios({
    method: 'DELETE',
    url: `/tasks/inventory/${data}`,
    data: {
      id: data
    }
  });
};

export default services;
