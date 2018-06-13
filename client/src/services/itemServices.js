import axios from 'axios';
const services = {};

services.getItems  = (data) => {
  return axios.get('/items');
};

services.getItemById = (data) => {
  return axios.get(`/items/${data}`);
};

export default services;
