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
    public Optional<Inventory> findByUserId(@PathVariable Long userId) { return inventoryRepository.findByUserId(userId); }

    @PostMapping("/")
    public Inventory addToInventory(@RequestBody Inventory inventory) { return inventoryRepository.save(inventory); }
}