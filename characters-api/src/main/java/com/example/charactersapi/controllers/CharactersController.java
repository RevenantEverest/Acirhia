package com.example.charactersapi.controllers;


import com.example.charactersapi.models.Character;
import com.example.charactersapi.repositories.CharacterRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.HttpStatus;

import java.util.*;
@RestController
public class CharactersController {

    @Autowired
    private CharacterRepository characterRepository;

    @GetMapping("/")
    public Iterable<Character> findAllCharacters() { return characterRepository.findAll(); }

    @GetMapping("/users/{userId}")
    public Iterable<Character> findAllByUserId(@PathVariable long userId) { return characterRepository.findByUserId(userId); }

    @GetMapping("/{characterId}")
    public Optional<Character> findCharacterById(@PathVariable Long characterId) { return characterRepository.findById(characterId); }

    @DeleteMapping("/{characterId}")
    public HttpStatus deleteCharacterById(@PathVariable Long characterId) {
        characterRepository.deleteById(characterId);
        return HttpStatus.OK;
    }

    @PostMapping("/")
    public Character createNewCharacter(@RequestBody Character newCharacter) { return characterRepository.save(newCharacter); }
}