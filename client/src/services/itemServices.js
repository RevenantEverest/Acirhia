import axios from 'axios';
const services = {};

services.getItems  = (data) => {
  return axios.get('/items');
};

export default services;
