package com.example.monolith.controllers;

import com.example.monolith.models.Inventory;
import com.example.monolith.repositories.InventoryRepository;
import com.example.monolith.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.HttpStatus;

import java.util.Optional;
@RestController
public class InventorysController {

    @Autowired
    private InventoryRepository inventoryRepository;

    @GetMapping("/inventory")
    public Iterable<Inventory> findAllInventorys() { return inventoryRepository.findAll(); }

    @PostMapping("/inventory")
    public Inventory addToInventory(@RequestBody Inventory inventory) { return inventoryRepository.save(inventory); }
}
