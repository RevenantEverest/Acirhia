package com.example.tasksapi.controllers;

import com.example.tasksapi.models.CharacterAchievement;
import com.example.tasksapi.repositories.CharacterAchievementRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.HttpStatus;

import java.util.*;

@RestController
public class CharacterAchievementsController {

    @Autowired
    private CharacterAchievementRepository characterAchievementRepository;

    @GetMapping("/achievements/characters")
    public Iterable<CharacterAchievement> findAllCharacterAchievements() { return characterAchievementRepository.findAll(); }

    @GetMapping("/achievements/characters/{characterId}")
    public Iterable<CharacterAchievement> findByCharacterId(@PathVariable Long characterId) { return characterAchievementRepository.findByCharacterId(characterId); }

    @GetMapping("/achievements/characters/users/{userId}")
    public Iterable<CharacterAchievement> findByUserId(@PathVariable Long userId) { return characterAchievementRepository.findByUserId(userId); }

    @PostMapping("/achievements/characters")
    public CharacterAchievement addCharacterAchievement(@RequestBody CharacterAchievement characterAchievement) { return characterAchievementRepository.save(characterAchievement); }
}