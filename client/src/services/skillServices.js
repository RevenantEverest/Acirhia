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

services.equipSkill = (data) => {
  return axios({
    method: 'POST',
    url: '/skills/characters',
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
}

export default services;
