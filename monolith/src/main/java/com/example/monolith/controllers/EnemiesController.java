package com.example.monolith.controllers;

import com.example.monolith.models.Enemy;
import com.example.monolith.repositories.CharacterRepository;
import com.example.monolith.repositories.EnemyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.HttpStatus;

import java.util.*;

@RestController
public class EnemiesController {

    @Autowired
    private EnemyRepository enemyRepository;

    @GetMapping("/enemies")
    public Iterable<Enemy> findAllEnemies() { return enemyRepository.findAll(); }

    @GetMapping("/enemies/{enemyId}")
    public Optional<Enemy> findEnemyById(@PathVariable long enemyId) { return enemyRepository.findById(enemyId); }

    @PatchMapping("/enemies/{enemyId}")
    public Enemy updateEnemyById(@PathVariable Long enemyId, @RequestBody Enemy enemyRequest) {

        Enemy enemyFromDb = enemyRepository.findById(enemyId).get();

        enemyFromDb.setEnemyName(enemyRequest.getEnemyName());
        enemyFromDb.setHealth(enemyRequest.getHealth());
        enemyFromDb.setAttack(enemyRequest.getAttack());
        enemyFromDb.setDefense(enemyRequest.getDefense());
        enemyFromDb.setExp(enemyRequest.getExp());
        enemyFromDb.setLvl(enemyRequest.getLvl());

        return enemyRepository.save(enemyFromDb);
    }
}
