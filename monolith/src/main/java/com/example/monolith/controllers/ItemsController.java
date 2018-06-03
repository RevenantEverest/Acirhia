package com.example.monolith.controllers;

import com.example.monolith.models.Item;
import com.example.monolith.repositories.ItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.HttpStatus;

import java.util.Optional;

@RestController
public class ItemsController {

    @Autowired
    private ItemRepository itemRepository;

    @GetMapping("/items")
    public Iterable<Item> findAllItems() { return itemRepository.findAll(); }

    @GetMapping("/items/{itemId}")
    public Optional<Item> findItemById(@PathVariable Long itemId) { return itemRepository.findById(itemId); }
}
