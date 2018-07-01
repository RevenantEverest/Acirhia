package com.example.tasksapi.repositories;

import com.example.tasksapi.models.QuestLog;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.*;

public interface QuestLogRepository extends CrudRepository<QuestLog, Long> {

    @Query(value = "SELECT * FROM questLog WHERE user_id = :userId", nativeQuery = true)
    Iterable<QuestLog> findByUserId(@Param ("userId") Long userId);

    @Query(value = "SELECT * FROM questLog WHERE character_id = :characterId", nativeQuery = true)
    Iterable<QuestLog> findByCharacterId(@Param ("characterId") Long characterId);

    @Query(value = "DELET FROM questLog WHERE character_id = :characterId", nativeQuery = true)
    void deleteByCharacterId(@Param ("characterId") Long characterId);
}