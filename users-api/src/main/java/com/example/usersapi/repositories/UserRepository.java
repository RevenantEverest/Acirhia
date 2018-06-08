package com.example.usersapi.repositories;

import com.example.usersapi.models.User;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.web.bind.annotation.RestController;

import java.util.*;

@SpringBootApplication
@EnableEurekaClient
@RestController
public interface UserRepository extends CrudRepository<User, Long> {
    Optional<User> findById(Long userId);
    void deleteById(Long userId);
}