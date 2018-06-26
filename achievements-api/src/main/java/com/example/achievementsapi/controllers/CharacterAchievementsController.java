package com.example.achievementsapi.controllers;

import com.example.achievementsapi.models.CharacterAchievement;
import com.example.achievementsapi.repositories.CharacterAchievementRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.HttpStatus;

import java.util.*;

@RestController
public class CharacterAchievementsController {

    @Autowired
    private CharacterAchievementRepository characterAchievementRepository;

    @GetMapping("/characters")
    public Iterable<CharacterAchievement> findAllCharacterAchievements() { return characterAchievementRepository.findAll(); }

    @GetMapping("/characters/{characterId}")
    public Iterable<CharacterAchievement> findByCharacterId(@PathVariable Long characterId) { return characterAchievementRepository.findByCharacterId(characterId); }

    @GetMapping("/characters/users/{userId}")
    public Iterable<CharacterAchievement> findByUserId(@PathVariable Long userId) { return characterAchievementRepository.findByUserId(userId); }

    @PostMapping("/characters")
    public CharacterAchievement addCharacterAchievement(@RequestBody CharacterAchievement characterAchievement) { return characterAchievementRepository.save(characterAchievement); }
}
