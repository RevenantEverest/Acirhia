package com.example.usersapi.controllers;


import com.example.usersapi.models.Character;
import com.example.usersapi.repositories.CharacterRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.HttpStatus;
import java.util.*;


@RestController
public class CharactersController {

    @Autowired
    private CharacterRepository characterRepository;

    @GetMapping("/characters")
    public Iterable<Character> findAllCharacters() { return characterRepository.findAll(); }

    @GetMapping("/characters/users/{userId}")
    public Iterable<Character> findAllByUserId(@PathVariable long userId) { return characterRepository.findByUserId(userId); }

    @GetMapping("/characters/{characterId}")
    public Iterable<Character> findCharacterById(@PathVariable Long characterId) { return characterRepository.findById(characterId); }

    @DeleteMapping("/characters/{characterId}")
    public HttpStatus deleteCharacterById(@PathVariable Long characterId) {
        characterRepository.delete(characterId);
        return HttpStatus.OK;
    }

    @PostMapping("/characters")
    public Character createNewCharacter(@RequestBody Character newCharacter) { return characterRepository.save(newCharacter); }

    @PutMapping("/characters/{characterId}")
    public Character updateCharacterById(@PathVariable Long characterId, @RequestBody Character characterRequest) {
        Character characterFromDb = characterRepository.findOne(characterId);

        characterFromDb.setUserId(characterRequest.getUserId());
        characterFromDb.setCharacterName(characterRequest.getCharacterName());
        characterFromDb.setClassId(characterRequest.getClassId());
        characterFromDb.setHealth(characterRequest.getHealth());
        characterFromDb.setAttack(characterRequest.getAttack());
        characterFromDb.setDefense(characterRequest.getDefense());
        characterFromDb.setExp(characterRequest.getExp());
        characterFromDb.setLvl(characterRequest.getLvl());
        characterFromDb.setGold(characterRequest.getGold());

        return characterRepository.save(characterFromDb);
    }


    //Update Character Health
    @PatchMapping("/characters/{characterId}/health")
    public Character updateCharacterHealth(@PathVariable Long characterId, @RequestBody Character characterRequest) {

        Character characterFromDb = characterRepository.findOne(characterId);

        characterFromDb.setHealth(characterRequest.getHealth());

        return characterRepository.save(characterFromDb);
    }

    //Update Character Exp
    @PatchMapping("/characters/{characterId}/exp")
    public Character updateCharacterExp(@PathVariable Long characterId, @RequestBody Character characterRequest) {

        Character characterFromDb = characterRepository.findOne(characterId);

        characterFromDb.setExp(characterRequest.getExp());

        return characterRepository.save(characterFromDb);
    }

    //Update Character Level
    @PatchMapping("/characters/{characterId}/level")
    public Character updateCharacterLevel(@PathVariable Long characterId, @RequestBody Character characterRequest) {

        Character characterFromDb = characterRepository.findOne(characterId);

        characterFromDb.setLvl(characterRequest.getLvl());

        return characterRepository.save(characterFromDb);
    }

    //Update Character Gold
    @PatchMapping("/characters/{characterId}/gold")
    public Character updateCharacterGold(@PathVariable Long characterId, @RequestBody Character characterRequest) {

        Character characterFromDb = characterRepository.findOne(characterId);

        characterFromDb.setGold(characterRequest.getGold());

        return characterRepository.save(characterFromDb);
    }

    //Update Character Stats
    @PatchMapping("/characters/{characterId}/stats")
    public Character updateCharacterStats(@PathVariable Long characterId, @RequestBody Character characterRequest) {

        Character characterFromDb = characterRepository.findOne(characterId);

        characterFromDb.setAttack(characterRequest.getAttack());
        characterFromDb.setDefense(characterRequest.getDefense());

        return characterRepository.save(characterFromDb);
    }
}
