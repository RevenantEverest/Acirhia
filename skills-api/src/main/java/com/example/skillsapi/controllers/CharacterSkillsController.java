package com.example.skillsapi.controllers;

import com.example.skillsapi.models.CharacterSkill;
import com.example.skillsapi.repositories.CharacterSkillRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.HttpStatus;

import java.util.*;

@RestController
public class CharacterSkillsController {

    @Autowired
    private CharacterSkillRepository characterSkillRepository;

    @GetMapping("/characters")
    Iterable<CharacterSkill> findAllCharacterSkills() { return characterSkillRepository.findAll(); }

//    @GetMapping("/characters/{characterId}")
//    Iterable<CharacterSkill> findSkillsByCharacterId(@PathVariable Long characterId) { return characterSkillRepository.findByCharacterId(characterId); }

    @PostMapping("/characters")
    public CharacterSkill addCharacterSkill(@RequestBody CharacterSkill characterSkill) { return characterSkillRepository.save(characterSkill); }
}
