import axios from 'axios';
const services = {};

services.getCharacterAttacks = (data) => {
  return axios.get(`/attacks/characters/${data}`);
};

export default services;
