package com.example.tasksapi.repositories;

import com.example.tasksapi.models.CharacterAchievement;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

public interface CharacterAchievementRepository extends CrudRepository<CharacterAchievement, Long> {

    @Query(value = "SELECT * FROM character_achievements WHERE characterId = :characterId", nativeQuery = true)
    Iterable<CharacterAchievement> findByCharacterId(@Param("characterId") Long characterId);

    @Query(value = "SELECT * FROM character_achievements WHERE userId = :userId", nativeQuery = true)
    Iterable<CharacterAchievement> findByUserId(@Param("userId") Long userId);
}