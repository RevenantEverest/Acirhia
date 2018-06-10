package com.example.itemsapi.controllers;

import com.example.itemsapi.models.Item;
import com.example.itemsapi.repositories.ItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.HttpStatus;

import java.util.Optional;

@RestController
public class ItemsController {

    @Autowired
    private ItemRepository itemRepository;

    @GetMapping("/")
    public Iterable<Item> findAllItems() { return itemRepository.findAll(); }

    @GetMapping("/{itemId}")
    public Optional<Item> findItemById(@PathVariable Long itemId) { return itemRepository.findById(itemId); }
}