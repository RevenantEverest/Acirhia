import axios from 'axios';
const services = {};

services.getSkills = (data) => {
  return axios.get('/skills');
};

services.getCharacterSkills = (data) => {
  return axios.get(`/skills/characterSkills/${data}`);
};

services.getClassSkills = (data) => {
  return axios.get(`/skills/class/${data}`);
};

services.getSkillsByLevel = (data) => {
  return axios.get(`/skills/level/${data}`);
};

//Called When Creating Character
services.defaultSkill = (data) => {
  return axios({
    method: 'POST',
    url: '/skills/characterSkills',
    data: {
      userId: data.userId,
      characterId: data.characterId,
      skillName: data.skillData.skillName,
      skillDescription: data.skillData.skillDescription,
      skillType: data.skillData.skillType,
      levelRequirement: data.skillData.levelRequirement,
      classRequirement: data.skillData.classRequirement,
      baseDamage: data.skillData.baseDamage,
      buff: data.skillData.buff
    }
  });
};

services.equipSkill = (data) => {
  return axios({
    method: 'POST',
    url: '/skills/characterSkills',
    data: {
      userId: data.userId,
      characterId: data.characterId,
      skillName: data.skillName,
      skillDescription: data.skillDescription,
      skillType: data.skillType,
      levelRequirement: data.levelRequirement,
      classRequirement: data.classRequirement,
      baseDamage: data.baseDamage,
      buff: data.buff
    }
  });
};

services.removeSkill = (data) => {
  return axios({
    method: 'DELETE',
    url: `/skills/characterSkills/${data}`
  });
};

services.removeCharacterSkills = (data) => {
  return axios({
    method: 'DELETE',
    url: `/skills/characterSkills/character/${data}`
  });
};

export default services;
