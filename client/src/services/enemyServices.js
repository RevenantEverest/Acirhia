import axios from 'axios';
const services = {};

services.getEnemies  = (data) => {
  return axios.get('/enemies');
};

export default services;
