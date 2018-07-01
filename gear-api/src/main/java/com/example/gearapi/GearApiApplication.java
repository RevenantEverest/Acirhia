package com.example.gearapi;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@EnableEurekaClient
@RestController
public class GearApiApplication {

    @RequestMapping("/")
    public String home() { return "Some Gear"; }

    public static void main(String[] args) { SpringApplication.run(GearApiApplication.class, args); }
}