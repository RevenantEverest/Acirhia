package com.example.inventoriesapi;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@EnableEurekaClient
@RestController
public class InventoriesApiApplication {

    @RequestMapping("/")
    public String home() { return "Some Inventories"; }

    public static void main(String[] args) { SpringApplication.run(InventoriesApiApplication.class, args); }
}