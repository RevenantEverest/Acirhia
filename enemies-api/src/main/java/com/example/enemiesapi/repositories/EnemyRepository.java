package com.example.enemiesapi.repositories;

import com.example.enemiesapi.models.Enemy;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.*;

public interface EnemyRepository extends CrudRepository<Enemy, Long> {
    Optional<Enemy> findById(Long enemyId);

}