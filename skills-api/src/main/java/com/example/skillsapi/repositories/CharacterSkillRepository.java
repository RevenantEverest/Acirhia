package com.example.skillsapi.repositories;

import com.example.skillsapi.models.CharacterSkill;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

public interface CharacterSkillRepository extends CrudRepository<CharacterSkill, Long> {

    @Query(value = "SELECT * FROM character_skills WHERE character_id = :characterId", nativeQuery = true)
    Iterable<CharacterSkill> findByCharacterId(@Param ("characterId") Long characterId);

    @Query(value = "DELETE FROM character_skills WHERE character_id = :characterId", nativeQuery = true)
    void deleteByCharacterId(@Param ("characterId") Long characterId);
}
