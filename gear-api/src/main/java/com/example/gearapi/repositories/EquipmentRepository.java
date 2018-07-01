package com.example.gearapi.repositories;

import com.example.gearapi.models.Equipment;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.http.HttpStatus;

import java.util.*;

public interface EquipmentRepository extends CrudRepository<Equipment, Long> {

    @Query(value = "SELECT * FROM equipment WHERE character_id = :characterId", nativeQuery = true)
    Iterable<Equipment> findByCharacterId(@Param ("characterId") Long characterId);

    @Query(value = "DELETE FROM equipment WHERE character_id = :characterId", nativeQuery = true)
    void deleteByCharacterId(@Param ("characterId") Long characterId);
}
