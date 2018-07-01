package com.example.gearapi.controllers;

import com.example.gearapi.models.Inventory;
import com.example.gearapi.repositories.InventoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.HttpStatus;

import java.util.Optional;
@RestController
public class InventoriesController {

    @Autowired
    private InventoryRepository inventoryRepository;

    @GetMapping("/inventory")
    public Iterable<Inventory> findAllInventories() { return inventoryRepository.findAll(); }

    @GetMapping("/inventory/users/{userId}")
    public Iterable<Inventory> findByUserId(@PathVariable Long userId) { return inventoryRepository.findByUserId(userId); }

    @GetMapping("/inventory/characters/{characterId}")
    public Iterable<Inventory> findByCharacterId(@PathVariable Long characterId) { return inventoryRepository.findByCharacterId(characterId); }

    @PostMapping("/inventory")
    public Inventory addToInventory(@RequestBody Inventory inventory) { return inventoryRepository.save(inventory); }

    @DeleteMapping("/inventory/{inventoryId}")
    public HttpStatus deleteInventoryById(@PathVariable Long inventoryId) {
        inventoryRepository.delete(inventoryId);
        return HttpStatus.OK;
    }
}