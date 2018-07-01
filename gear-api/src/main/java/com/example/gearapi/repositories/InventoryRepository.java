package com.example.gearapi.repositories;

import com.example.gearapi.models.Inventory;
import org.apache.http.HttpStatus;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.*;

public interface InventoryRepository extends CrudRepository<Inventory, Long> {

    @Query(value = "SELECT * FROM inventory WHERE user_id = :userId", nativeQuery = true)
    Iterable<Inventory> findByUserId(@Param("userId") Long userId);

    @Query(value = "SELECT * FROM inventory WHERE character_id = :characterId", nativeQuery = true)
    Iterable<Inventory> findByCharacterId(@Param ("characterId") Long characterId);

    @Query(value = "DELETE FROM inventory WHERE character_id = :characterId", nativeQuery = true)
    void deleteByCharacterId(@Param ("characterId") Long characterId);
}