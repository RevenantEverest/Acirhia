const services = {};

services.checkForLevelUp = (data) => {
  if(data.exp === (data.level * 300)) {
    return true;
  }else {
    return false;
  }
}

export default services;
