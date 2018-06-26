import axios from 'axios';
const services = {};

services.getQuests = (data) => {
  return axios.get('/tasks/quest');
}

export default services;
