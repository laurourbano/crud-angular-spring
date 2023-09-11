package com.lauro.crudspring;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import com.lauro.crudspring.model.Course;
import com.lauro.crudspring.repository.CourseRepository;

@SpringBootApplication
public class CrudSpringApplication {

	public static void main(String[] args) {
		SpringApplication.run(CrudSpringApplication.class, args);
	}

	@Bean
	CommandLineRunner initDatabase(CourseRepository couseRepository) {
		return args -> {
			couseRepository.deleteAll();
			Course c = new Course();
			c.setName("Java");
			c.setCategory("Programação");
			couseRepository.save(c);
		};
	}

}
