import axios from 'axios';
const services = {};

services.acceptQuest = (data) => {
  return axios({
    method: 'POST',
    url: '/tasks/questLog',
    data: {
      userId: data.userId,
      characterId: data.characterId,
      questName: data.questName,
      questDescription: data.questDescription,
      questType: data.questType,
      requirement: data.requirement,
      aquired: data.quired
    }
  });
};

services.getCharacterQuests = (data) => {
  return axios.get(`/tasks/questLog/characters/${data}`);
};

export default services;
