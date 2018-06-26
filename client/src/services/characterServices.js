import axios from 'axios';
const services = {};

//Create Character
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

//Get Character Info
services.getCharacterInfo = (data) => {
  return axios.get(`/users/characters/${data}`);
};

//Update Character FULL
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

//Update Character Health
services.updateCharacterHealth = (data) => {
  return axios({
    method: 'PATCH',
    url: `/users/characters/${data.characterId}/health`,
    data: {
      characterId: data.characterId,
      health: data.health
    }
  });
};

//Update Character Exp
services.updateCharacterExp = (data) => {
  return axios({
    method: 'PATCH',
    url: `/users/characters/${data.characterId}/exp`,
    data: {
      characterId: data.characterId,
      exp: data.exp
    }
  });
};

//Update Character Level
services.updateCharacterLevel = (data) => {
  return axios({
    method: 'PATCH',
    url: `/users/characters/${data.characterId}/level`,
    data: {
      characterId: data.characterId,
      lvl: data.lvl
    }
  });
};

//Update Character Gold
services.updateCharacterGold = (data) => {
  return axios({
    method: 'PATCH',
    url: `/users/characters/${data.characterId}/gold`,
    data: {
      characterId: data.characterId,
      gold: data.gold
    }
  });
};

//Delete Character
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
