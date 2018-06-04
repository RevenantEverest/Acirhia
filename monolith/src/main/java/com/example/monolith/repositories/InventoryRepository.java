package com.example.monolith.repositories;

import com.example.monolith.models.Inventory;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.*;

public interface InventoryRepository extends CrudRepository<Inventory, Long> {

    @Query(value = "SELECT * FROM inventory JOIN items ON inventory.item_id = items.item_id WHERE user_id = :userId", nativeQuery = true)
    Optional<Inventory> findByUserId(@Param("userId") Long userId);
}
