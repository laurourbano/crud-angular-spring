package com.lauro.crudspring.dto;

import java.util.List;

import org.hibernate.validator.constraints.Length;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;

public record CourseDTO(
    Long _id,
    @NotBlank @NotNull @Length(min = 3, max = 100) String name,
    @NotNull @Length(max=20)@Pattern(regexp="Back-end|Front-end")
    String category,
    List<LessonDTO> lessons
  ) {
        
}
