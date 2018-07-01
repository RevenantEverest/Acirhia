package com.example.tasksapi.repositories;

import com.example.tasksapi.models.Achievement;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.*;

public interface AchievementRepository extends CrudRepository<Achievement, Long> {
}
