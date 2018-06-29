package com.example.skillsapi.repositories;

import com.example.skillsapi.models.CharacterSkill;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

public interface CharacterSkillRepository extends CrudRepository<CharacterSkill, Long> {

//    @Query(value = "SELECT * FROM character_skills WHERE character_id = :characterId")
//    Iterable<CharacterSkill> findByCharacterId(@Param ("characterId") Long characterId);
}
