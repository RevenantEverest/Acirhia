package com.example.tasksapi.repositories;

import com.example.tasksapi.models.Quest;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.*;

public interface QuestRepository extends CrudRepository<Quest, Long> {

    @Query(value = "SELECT * FROM quests WHERE quest_id = :questId", nativeQuery = true)
    Iterable<Quest> findById(@Param ("questId") Long questId);
}