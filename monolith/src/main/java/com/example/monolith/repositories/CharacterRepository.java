package com.example.monolith.repositories;

import com.example.monolith.models.Character;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.*;

public interface CharacterRepository extends CrudRepository<Character, Long> {

    @Query(value = "SELECT * FROM characters WHERE user_id = :userId", nativeQuery = true)
    Iterable<Character> findByUserId(@Param("userId") long userId);

}
