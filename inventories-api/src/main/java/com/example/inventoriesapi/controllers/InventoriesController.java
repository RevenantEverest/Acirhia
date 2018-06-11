package com.example.inventoriesapi.controllers;

import com.example.inventoriesapi.models.Inventory;
import com.example.inventoriesapi.repositories.InventoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.HttpStatus;

import java.util.Optional;
@RestController
public class InventoriesController {

    @Autowired
    private InventoryRepository inventoryRepository;

    @GetMapping("/")
    public Iterable<Inventory> findAllInventories() { return inventoryRepository.findAll(); }

    @GetMapping("/users/{userId}")
    public Iterable<Inventory> findByUserId(@PathVariable Long userId) { return inventoryRepository.findByUserId(userId); }

    @GetMapping("/characters/{characterId}")
    public Iterable<Inventory> findByCharacterId(@PathVariable Long characterId) { return inventoryRepository.findByCharacterId(characterId); }

    @PostMapping("/")
    public Inventory addToInventory(@RequestBody Inventory inventory) { return inventoryRepository.save(inventory); }
}