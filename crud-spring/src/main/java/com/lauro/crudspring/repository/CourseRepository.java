package com.lauro.crudspring.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.lauro.crudspring.model.Course;

public interface CourseRepository extends JpaRepository<Course, Long> {
    
}
