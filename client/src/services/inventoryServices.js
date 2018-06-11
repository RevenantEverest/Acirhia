import axios from 'axios';
const services = {};

services.getAllUserInventory = (data) => {
  return axios.get(`/inventory/users/${data}`);
};

services.getCharacterInventory = (data) => {
  return axios.get(`/inventory/characters/${data}`);
};

services.addToInventory = (data) => {
  return axios({
    method: 'POST',
    url: '/inventory',
    data: {
      userId: data.userId,
      itemId: data.itemId
    }
  })
};

export default services;
