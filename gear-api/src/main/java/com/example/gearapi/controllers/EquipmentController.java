package com.example.gearapi.controllers;

import com.example.gearapi.models.Equipment;
import com.example.gearapi.repositories.EquipmentRepository;
import com.example.gearapi.repositories.InventoryRepository;
import com.netflix.discovery.converters.Auto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.HttpStatus;

import java.util.*;
@RestController
public class EquipmentController {

    @Autowired
    private EquipmentRepository equipmentRepository;

    @GetMapping("/equipment")
    public Iterable<Equipment> findAllEquipment() { return equipmentRepository.findAll(); }

    @GetMapping("/equipment/characters/{characterId}")
    public Iterable<Equipment> findEquipmentByCharacter(@PathVariable Long characterId) { return equipmentRepository.findByCharacterId(characterId); }

    @PostMapping("/equipment")
    public Equipment addEquipment(@RequestBody Equipment equipment) { return equipmentRepository.save(equipment); }

    @DeleteMapping("/equipment/{equipmentId}")
    public HttpStatus deleteEquipmentById(@PathVariable Long equipmentId) {
        equipmentRepository.delete(equipmentId);
        return HttpStatus.OK;
    }

    @DeleteMapping("/equipment/{characterId}/character")
    public HttpStatus DeleteByCharacterId(@PathVariable Long characterId) {
        equipmentRepository.deleteByCharacterId(characterId);
        return HttpStatus.OK;
    }
}
