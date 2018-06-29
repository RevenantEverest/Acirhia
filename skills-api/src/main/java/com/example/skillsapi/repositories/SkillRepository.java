package com.example.skillsapi.repositories;

import com.example.skillsapi.models.Skill;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface SkillRepository extends CrudRepository<Skill, Long> {

    @Query(value = "SELECT * FROM skills WHERE class_requirement = :classId", nativeQuery = true)
    Iterable<Skill> findByClassId(@Param ("classId") int classId);

    @Query(value = "SELECT * FROM skills WHERE level_requirement = :level", nativeQuery = true)
    Iterable<Skill> findByLevel(@Param ("level") int level);

    @Query(value = "SELECT * FROM skills WHERE skill_type = :skillType", nativeQuery = true)
    Iterable<Skill> findByType(@Param ("skillType") String skillType);
}
