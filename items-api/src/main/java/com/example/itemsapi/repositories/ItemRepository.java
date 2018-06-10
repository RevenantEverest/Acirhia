package com.example.itemsapi.repositories;

import com.example.itemsapi.models.Item;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.*;

public interface ItemRepository extends CrudRepository<Item, Long> {
    Optional<Item> findById(Long itemId);
}