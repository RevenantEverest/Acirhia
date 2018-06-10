package com.example.inventoriesapi.repositories;

import com.example.inventoriesapi.models.Inventory;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.*;

public interface InventoryRepository extends CrudRepository<Inventory, Long> {

    @Query(value = "SELECT * FROM inventory WHERE user_id = :userId", nativeQuery = true)
    Optional<Inventory> findByUserId(@Param("userId") Long userId);
}