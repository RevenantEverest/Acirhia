package com.example.itemsapi.repositories;

import com.example.itemsapi.models.Item;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.*;

public interface ItemRepository extends CrudRepository<Item, Long> {
    @Query(value = "SELECT * FROM items WHERE id = :itemId", nativeQuery = true)
    Iterable<Item> findById(@Param ("itemId") Long itemId);

    @Query(value = "SELECT * FROM items WHERE item_type = :itemType", nativeQuery = true)
    Iterable<Item> findByItemType(@Param ("itemType") String itemType);
}