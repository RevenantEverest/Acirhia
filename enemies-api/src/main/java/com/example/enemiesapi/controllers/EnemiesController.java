package com.example.enemiesapi.controllers;

import com.example.enemiesapi.models.Enemy;
import com.example.enemiesapi.repositories.EnemyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.HttpStatus;

import java.util.*;

@RestController
public class EnemiesController {

    @Autowired
    private EnemyRepository enemyRepository;

    @GetMapping("/")
    public Iterable<Enemy> findAllEnemies() { return enemyRepository.findAll(); }

    @GetMapping("/{enemyId}")
    public Optional<Enemy> findEnemyById(@PathVariable long enemyId) { return enemyRepository.findById(enemyId); }
}