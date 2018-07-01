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
      acquired: data.acquired
    }
  });
};

services.getCharacterQuests = (data) => {
  return axios.get(`/tasks/questLog/characters/${data}`);
};

services.removeQuest = (data) => {
  return axios({
    method: 'DELETE',
    url: `/tasks/questLog/${data}`
  });
};

export default services;
