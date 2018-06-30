package com.example.skillsapi.controllers;

import com.example.skillsapi.models.Skill;
import com.example.skillsapi.repositories.SkillRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.HttpStatus;

import java.util.*;

@RestController
public class SkillsController {

    @Autowired
    private SkillRepository skillRepository;

    @GetMapping("/")
    Iterable<Skill> findAllSkills() { return skillRepository.findAll(); }

    //Find Skills by Class Requirement
    @GetMapping("/class/{classId}")
    Iterable<Skill> findByClassId(@PathVariable int classId) { return skillRepository.findByClassId(classId); }

    //Find Skills by Level Requirement
    @GetMapping("/level/{level}")
    Iterable<Skill> findByLevel(@PathVariable int level) {  return skillRepository.findByLevel(level); }

    //Find Skills By Type
    @GetMapping("/skillType/{skillType}")
    Iterable<Skill> findByType(@PathVariable String skillType) { return skillRepository.findByType(skillType); }
}
