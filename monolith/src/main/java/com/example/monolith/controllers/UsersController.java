package com.example.monolith.controllers;


import com.example.monolith.models.User;
import com.example.monolith.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.HttpStatus;

import java.util.Optional;
@RestController
public class UsersController {

    @Autowired
    private UserRepository userRepository;

    @GetMapping("/users")
    public Iterable<User> findAllUsers() { return userRepository.findAll(); }

    @GetMapping("/users/{userId}")
    public Optional<User> findUserById(@PathVariable Long userId) { return userRepository.findById(userId); }

    @DeleteMapping("/users/{userId}")
    public HttpStatus deleteUserById(@PathVariable Long userId) {
        userRepository.deleteById(userId);
        return HttpStatus.OK;
    }

    @PostMapping("/users")
    public User createNewUser(@RequestBody User newUser) { return userRepository.save(newUser); }

    @PatchMapping("/users/{userId}")
    public User updateUserById(@PathVariable Long userId, @RequestBody User userRequest) {

        User userFromDb = userRepository.findById(userId).get();

        userFromDb.setUserName(userRequest.getUserName());

        return userRepository.save(userFromDb);
    }
}
