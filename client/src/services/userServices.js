import axios from 'axios';
const services = {};

services.getCharactersFromUser = (data) => {
  return axios.get(`users/characters/users/${data}`);
};

export default services;
