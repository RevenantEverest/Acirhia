package com.example.tasksapi.controllers;

import com.example.tasksapi.models.QuestLog;
import com.example.tasksapi.repositories.QuestLogRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.HttpStatus;

import java.util.Optional;
@RestController
public class QuestLogsController {

    @Autowired
    private QuestLogRepository questLogRepository;

    @GetMapping("/questLog")
    public Iterable<QuestLog> findAllQuestLogs() { return questLogRepository.findAll(); }

    @GetMapping("/questLog/users/{userId}")
    public Iterable<QuestLog> findByUserId(@PathVariable Long userId) { return questLogRepository.findByUserId(userId); }

    @GetMapping("/questLog/characters/{characterId}")
    public Iterable<QuestLog> findByCharacterId(@PathVariable Long characterId) { return questLogRepository.findByCharacterId(characterId); }

    @PostMapping("/questLog")
    public QuestLog addToQuestLog(@RequestBody QuestLog questLog) { return questLogRepository.save(questLog); }
}