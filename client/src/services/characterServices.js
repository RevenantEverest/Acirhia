import axios from 'axios';
const services = {};

services.createCharacter = (data) => {
  return axios({
    method: 'POST',
    url: '/users/characters',
    data: {
      userId: data.userId,
      characterName: data.characterName,
      classId: data.classId,
      health: data.health,
      attack: data.attack,
      defense: data.defense,
      exp: 0,
      lvl: 1,
      gold: 100
    }
  })
};

services.getCharacterInfo = (data) => {
  return axios.get(`/users/characters/${data}`);
};

services.updateCharacter = (data) => {
  return axios({
    method: 'PUT',
    url: `/users/characters/${data.characterId}`,
    data: {
      userId: data.userId,
      characterName: data.characterName,
      classId: data.classId,
      health: data.health,
      attack: data.attack,
      defense: data.defense,
      exp: data.exp,
      lvl: data.lvl,
      gold: data.gold
    }
  });
};

services.deleteCharacter = (data) => {
  return axios({
    method: 'DELETE',
    url: `/users/characters/${data}`,
    data: {
      characterId: data
    }
  })
};

export default services;
