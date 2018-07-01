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

    @GetMapping("/characterSkills")
    Iterable<CharacterSkill> findAllCharacterSkills() { return characterSkillRepository.findAll(); }

    @GetMapping("/characterSkills/{characterId}")
    Iterable<CharacterSkill> findSkillsByCharacterId(@PathVariable Long characterId) { return characterSkillRepository.findByCharacterId(characterId); }

    @PostMapping("/characterSkills")
    public CharacterSkill addCharacterSkill(@RequestBody CharacterSkill characterSkill) { return characterSkillRepository.save(characterSkill); }

    @DeleteMapping("/characterSkills/{skillId}")
    public HttpStatus deleteCharacterSkill(@PathVariable Long skillId) {
        characterSkillRepository.delete(skillId);
        return HttpStatus.OK;
    }

    @DeleteMapping("/characterSkills/character/{characterId}")
    public HttpStatus deleteByCharacterId(@PathVariable Long characterId) {
        characterSkillRepository.deleteByCharacterId(characterId);
        return HttpStatus.OK;
    }
}
