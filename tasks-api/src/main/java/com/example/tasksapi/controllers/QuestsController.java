package com.example.tasksapi.controllers;

import com.example.tasksapi.models.Quest;
import com.example.tasksapi.repositories.QuestRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.HttpStatus;

import java.util.Optional;
@RestController
public class QuestsController {

    @Autowired
    private QuestRepository questRepository;

    @GetMapping("/quest")
    public Iterable<Quest> findAllQuests() { return questRepository.findAll(); }

    @GetMapping("/quest/{questId}")
    public Iterable<Quest> findOneQuest(@PathVariable Long questId) { return questRepository.findById(questId); }
}