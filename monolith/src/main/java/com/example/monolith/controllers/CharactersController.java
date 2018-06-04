package com.example.monolith.controllers;

import com.example.monolith.models.Character;
import com.example.monolith.repositories.CharacterRepository;
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

    @GetMapping("/characters/{characterId}")
    public Optional<Character> findCharacterById(@PathVariable long characterId) { return characterRepository.findById(characterId); }

    @GetMapping("/characters/users/{userId}")
    public Iterable<Character> findAllByUserId(@PathVariable long userId) { return characterRepository.findByUserId(userId); }

    @DeleteMapping("/characters/{characterId}")
    public HttpStatus deleteCharacterById(@PathVariable Long characterId) {
        characterRepository.deleteById(characterId);
        return HttpStatus.OK;
    }

    @PostMapping("/characters")
    public Character createNewCharacter(@RequestBody Character newCharacter) { return characterRepository.save(newCharacter); }

    @PatchMapping("/characters/health/{characterId}")
    public Character updateCharacterById(@PathVariable Long characterId, @RequestBody Character characterRequest) {

        Character characterFromDb = characterRepository.findById(characterId).get();

        characterFromDb.setHealth(characterRequest.getHealth());

        return characterRepository.save(characterFromDb);
    }
}
