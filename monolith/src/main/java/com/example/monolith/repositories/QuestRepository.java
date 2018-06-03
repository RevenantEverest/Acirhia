package com.example.monolith.repositories;

import com.example.monolith.models.Quest;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.*;

public interface QuestRepository extends CrudRepository<Quest, Long>{
}
