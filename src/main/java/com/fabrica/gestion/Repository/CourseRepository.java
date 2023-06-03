package com.fabrica.gestion.Repository;

import com.fabrica.gestion.model.Course;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CourseRepository extends JpaRepository<Course, Long> {

     // Otros metodos personalizados para consultar cursos
}