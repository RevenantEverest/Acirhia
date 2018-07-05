import questLogServices from './questLogServices';

const services = {};

services.trackKillQuest = (data) => {
  let questId;
  let acquired;
  let alreadyAcquired;
  for(let i = 0; i < data.questLog.length; i++) {
    switch(data.questLog[i].questName) {
      case 'On The Forefront':
        questId = data.questLog[i].id;
        alreadyAcquired = data.questLog[i].acquired;
        switch(data.enemyInfo.enemyName) {
          case 'Orc':
            acquired = alreadyAcquired + 1;
            break;
          case 'Skeleton':
            acquired = alreadyAcquired + 1;
          default:
            break;
        }
        break;
      default:
        break;
    }
  }
  questLogServices.updateQuest({ questId: questId, acquired: acquired })
    .then(quest => { console.log("Updated Quest") }).catch(err => console.log("Failed at Update Quest => ", err));
};

services.trackGatherQuest = (data) => {
  let questId;
  let acquired = 0;
  let alreadyAcquired;
  for(let i = 0; i < data.questLog.length; i++) {
    for(let x = 0; x < data.inventory.length; x++) {
      switch(data.questLog[i].questName) {
        case 'Out Village Burns':
          questId = data.questLog[i].id;
          alreadyAcquired = data.questLog[i].acquired;
          switch(data.inventory[x].itemName) {
            case 'Health Potion':
              acquired = acquired + alreadyAcquired + 1;
              break;
            default:
              break;
          }
          break;
        default:
          break;
      }
    }
  }
  questLogServices.updateQuest({ questId: questId, acquired: acquired })
    .then(quest => {  }).catch(err => console.log("Failed at Update Quest => ", err));
};

export default services;
