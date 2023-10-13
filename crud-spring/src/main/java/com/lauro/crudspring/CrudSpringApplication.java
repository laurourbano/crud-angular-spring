package com.lauro.crudspring;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import com.lauro.crudspring.enums.Category;
import com.lauro.crudspring.model.Course;
import com.lauro.crudspring.model.Lesson;
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
			c.setCategory(Category.BACKEND);
			Course c2 = new Course();
			c2.setName("Angular");
			c2.setCategory(Category.FRONTEND);

			Lesson l = new Lesson();

			l.setName("Aula 1");
			l.setYoutubeUrl("watch?v=1");
			l.setCourse(c);
			c.getLessons().add(l);
			
			Lesson l2 = new Lesson();
			l2.setName("Aula 2");
			l2.setYoutubeUrl("watch?v=2");
			l2.setCourse(c);
			c.getLessons().add(l2);
			
			couseRepository.save(c);
			couseRepository.save(c2);

				};
	}

}
