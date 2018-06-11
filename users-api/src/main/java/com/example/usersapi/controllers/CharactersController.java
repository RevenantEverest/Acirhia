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
        characterRepository.deleteById(characterId);
        return HttpStatus.OK;
    }

    @PostMapping("/characters")
    public Character createNewCharacter(@RequestBody Character newCharacter) { return characterRepository.save(newCharacter); }
}