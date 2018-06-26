package com.example.achievementsapi.controllers;

import com.example.achievementsapi.models.Achievement;
import com.example.achievementsapi.repositories.AchievementRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.HttpStatus;

import java.util.*;

@RestController
public class AchievementsController {

    @Autowired
    private AchievementRepository achievementRepository;

    @GetMapping("/")
    public Iterable<Achievement> findAllAchievements() { return achievementRepository.findAll(); }
}
