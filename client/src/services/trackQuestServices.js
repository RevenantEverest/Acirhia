import axios from 'axios';
const services = {};

services.trackKillQuest = (data) => {
  for(let i = 0; i < data.questLog.length; i++) {
    switch(data.questLog[i].questName) {
      case 'On The Forefront':
        if(data.enemyInfo.enemyName === 'Orc') {
          updateQuest({ userId: data.userId, characterId: data.characterId, aquired: data.questLog[i].aquired + 1 })
            .then(quest => {  }).catch(err => console.log("Failed at Update Quest => ", err));
        }
        break;
      default:
        break;
    }
  }
};

services.trackGatherQuest = (data) => {
  for(let i = 0; i < data.questLog.length; i++) {
    switch(data.questLog[i].questName) {
      case 'Out Village Burns':
        for(let x = 0; x < data.inventory.length; x++) {
          if(data.inventory[x].itemName === 'Health Potion') {
            updateQuest({ userId: data.userId, characterId: data.characterId, aquired: data.questLog[i].aquired + 1 })
              .then(quest => {  }).catch(err => console.log("Failed at Update Quest => ", err));
          }
        }
        break;
      default:
        break;
    }
  }
};

services.updateQuest = (data) => {
  return axios({
    method: 'PATCH',
    url: `/tasks/questLog/${data.questLogId}`,
    data: {
      userId: data.userId,
      characterId: data.characterId,
      aquired: data.aquired
    }
  })
};

export default services;
