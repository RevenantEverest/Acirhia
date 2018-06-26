package com.example.achievementsapi;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@EnableEurekaClient
@RestController
public class AchievementsApiApplication {

    @RequestMapping("/")
    public String home() { return "Some Achievements"; }

    public static void main(String[] args) { SpringApplication.run(AchievementsApiApplication.class, args); }
}