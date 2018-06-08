package com.example.usersapi.controllers;


import com.example.usersapi.models.User;
import com.example.usersapi.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.HttpStatus;

import java.util.*;
@RestController
public class UsersController {

    @Autowired
    private UserRepository userRepository;

    @GetMapping("/")
    public Iterable<User> findAllUsers() { return userRepository.findAll(); }

    @GetMapping("/{userId}")
    public Optional<User> findUserById(@PathVariable Long userId) { return userRepository.findById(userId); }

    @DeleteMapping("/{userId}")
    public HttpStatus deleteUserById(@PathVariable Long userId) {
        userRepository.deleteById(userId);
        return HttpStatus.OK;
    }

//    @PostMapping("/")
//    public User createNewUser(@RequestBody User newUser) { return userRepository.save(newUser); }
//
//    @PatchMapping("/{userId}")
//    public User updateUserById(@PathVariable Long userId, @RequestBody User userRequest) {
//
//        User userFromDb = userRepository.findById(userId).get();
//
//        userFromDb.setUserName(userRequest.getUserName());
//
//        return userRepository.save(userFromDb);
//    }
}