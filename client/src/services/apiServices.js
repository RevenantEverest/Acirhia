import axios from 'axios';
const services = {};

services.createCharacter = (data) => {
  return axios({
    method: 'POST',
    url: '/characters',
    data: {
      userId: data.userId,
      characterName: data.characterName,
      classID: data.classId,
      health: data.health,
      attack: data.attack,
      defense: data.defense,
      exp: 0,
      lvl: 1,
      gold: 100
    }
  })
};

services.deleteCharacter = (data) => {
  return axios({
    method: 'DELETE',
    url: `/characters/${data}`,
    data: {
      characterId: data
    }
  })
};

services.getCharactersFromUser = (data) => {
  return axios.get(`/characters/users/${data}`);
};

services.getCharacterInfo = (data) => {
  return axios.get(`/characters/${data}`);
};

//Inventory
services.getCharacterInventory = (data) => {
  return axios.get(`/inventory/users/${data}`);
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
