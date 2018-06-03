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
      defense: data.defense
    }
  })
};

services.getCharactersFromUser = (data) => {
  return axios.get(`/characters/users/${data}`);
};

export default services;
