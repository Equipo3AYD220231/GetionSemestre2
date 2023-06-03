package com.fabrica.gestion.service;

import com.fabrica.gestion.Repository.CourseRepository;
import com.fabrica.gestion.model.Course;
import org.springframework.stereotype.Service;

@Service
public class CourseService {
    private final CourseRepository courseRepository;

    public CourseService(CourseRepository courseRepository) {
        this.courseRepository = courseRepository;
    }

    public Course ingresarCourse(Course course) {
        return courseRepository.save(course);
    }

}
