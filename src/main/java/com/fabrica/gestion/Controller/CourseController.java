package com.fabrica.gestion.Controller;

import com.fabrica.gestion.Repository.CourseRepository;
import com.fabrica.gestion.Repository.SemesterRepository;
import com.fabrica.gestion.model.Course;
import com.fabrica.gestion.model.Semester;
import com.fabrica.gestion.service.CourseService;
import jakarta.persistence.Id;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@RestController
@RequestMapping("/cursos")

public class CourseController {
    @Autowired
    private CourseRepository CourseRepository;
    private final CourseService courseService;

    public CourseController(CourseService courseService) {
        this.courseService = courseService;
    }

    @PostMapping
    public ResponseEntity<Course> ingresarCurso(@RequestBody Course curso) {
        Course nuevoCurso = courseService.ingresarCourse(curso);
        return ResponseEntity.ok(nuevoCurso);
    }

    // Otros métodos para actualizar, eliminar y consultar cursos

    @PutMapping(value= "/updatecurso/{id}")
    public String updateSemester(@PathVariable Long id, @RequestBody Course course) {
        Course  updatedCourse = CourseRepository.findById(id).get();
        updatedCourse.setNombre(course.getNombre());

        return "updated semester";
    }

    /*metodo encargado de enviar informacion a  la BD mediante APiRESt, desde el front.   */
    @DeleteMapping(value = "/deletesemester/{id}")
    public String deleteSemester(@PathVariable Long id) {
        Course deletedSemester = CourseRepository.findById(id).get();
        CourseRepository.delete(deletedSemester);
        return "deleted semester";
    }


}
