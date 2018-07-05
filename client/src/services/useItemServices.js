import characterServices from './characterServices';
const services = {};

services.useItem = (data) => {
  let health = 0;
  switch(data.itemName) {
    case "Health Potion":
      health = 50;
      break;
    case "Large Health Potion":
      health = 80;
      break;
    case "Potato Soup":
      health = 25;
    default:
      break;
  }
  characterServices.updateCharacterHealth({ userId: data.userId, characterId: data.characterId, health: data.characterHealth + health })
    .then().catch(err => console.log("Failed at Update Character Health"));
}

export default services;
