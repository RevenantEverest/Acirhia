package com.example.usersapi.repositories;

import com.example.usersapi.models.Character;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.web.bind.annotation.RestController;

import java.util.*;

@SpringBootApplication
@EnableEurekaClient
@RestController
public interface CharacterRepository extends CrudRepository<Character, Long> {

    @Query(value = "SELECT * FROM characters WHERE user_id = :userId", nativeQuery = true)
    Iterable<Character> findByUserId(@Param("userId") long userId);

    @Query(value = "SELECT * FROM characters WHERE id = :characterId", nativeQuery = true)
    Iterable<Character> findById(@Param("characterId") Long characterId);

    void deleteById(Long characterId);
}