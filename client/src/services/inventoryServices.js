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
      itemType: data.itemType,
      worth: data.worth
    }
  })
};

export default services;
