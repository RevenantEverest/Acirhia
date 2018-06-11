package com.example.tasksapi;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@EnableEurekaClient
@RestController
public class TasksApiApplication {

	@RequestMapping("/")
	public String home() { return "Some Tasks"; }

	public static void main(String[] args) { SpringApplication.run(TasksApiApplication.class, args); }
}