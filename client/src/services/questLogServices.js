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

services.updateQuest = (data) => {
  return axios({
    method: 'PATCH',
    url: `/tasks/questLog/${data.questId}`,
    data: {
      acquired: data.acquired
    }
  })
};

services.removeQuest = (data) => {
  return axios({
    method: 'DELETE',
    url: `/tasks/questLog/${data}`
  });
};

services.removeQuestLog = (data) => {
  return axios({
    method: 'DELETE',
    url: `/tasks/questLog/character/${data}`
  });
};

export default services;
