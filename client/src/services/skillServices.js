import axios from 'axios';
const services = {};

services.getSkills = (data) => {
  return axios.get('/skills');
};

services.getCharacterSkills = (data) => {
  return axios.get(`/skills/characters/${data}`);
};

services.getClassSkills = (data) => {
  return axios.get(`/skills/class/${data}`);
};

services.getSkillsByLevel = (data) => {
  return axios.get(`/skills/level/${data}`);
};

export default services;
