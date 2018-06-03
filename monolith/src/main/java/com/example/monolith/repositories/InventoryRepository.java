package com.example.monolith.repositories;

import com.example.monolith.models.Inventory;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.*;

public interface InventoryRepository extends CrudRepository<Inventory, Long> {
}
