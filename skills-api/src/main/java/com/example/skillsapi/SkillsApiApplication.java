package com.example.skillsapi;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@EnableEurekaClient
@RestController
public class SkillsApiApplication {

	@RequestMapping("/")
	public String home() { return "Some Skills"; }

	public static void main(String[] args) { SpringApplication.run(SkillsApiApplication.class, args); }

}