package com.example.tasksapi.controllers;

import com.example.tasksapi.models.Achievement;
import com.example.tasksapi.repositories.AchievementRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.HttpStatus;

import java.util.*;

@RestController
public class AchievementsController {

    @Autowired
    private AchievementRepository achievementRepository;

    @GetMapping("/achievements")
    public Iterable<Achievement> findAllAchievements() { return achievementRepository.findAll(); }
}