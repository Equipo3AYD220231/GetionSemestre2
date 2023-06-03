package com.fabrica.gestion.controller;

import com.fabrica.gestion.interfaces.ISemesterService;
import com.fabrica.gestion.model.Semester;
import com.fabrica.gestion.repository.SemesterRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import java.util.List;

@RestController
public class SemesterController {

    private final ISemesterService semesterService;

    public SemesterController( ISemesterService semesterService){
        this.semesterService = semesterService;
    }

 
   /*metodo encargado de pedir al Api rest los registro de la BD, desde el front   */
    @GetMapping("/semesters")
    public List<Semester> getSemester() {
        return semesterService.getSemester();
    }

    /*metodo encargado de enviar informacion a  la BD mediante APiRESt, desde el front.   */
    @PostMapping(value="/savesemester")
    public String saveSemesters(@RequestBody Semester semester) {
        return semesterService.saveSemesters(semester);
    }

    /*metodo encargado de enviar informacion a  la BD mediante APiRESt, desde el front.   */
    @PutMapping(value= "/updatesemester/{id}")
    public String updateSemester(@PathVariable Long id, @RequestBody Semester semester) {
        return semesterService.updateSemester(id, semester);
    }

    /*metodo encargado de enviar informacion a  la BD mediante APiRESt, desde el front.   */
    @DeleteMapping(value = "/deletesemester/{id}")
    public String deleteSemester(@PathVariable Long id) {
        return deleteSemester(id);
    }
    
    @Configuration
    public class CorsConfiguration {

        @Bean
        public WebMvcConfigurer corsConfigurer() {
            return new WebMvcConfigurer() {
                @Override
                public void addCorsMappings(CorsRegistry registry) {
                    registry.addMapping("/**")
                            .allowedOrigins("*")
                            .allowedMethods("GET", "POST", "PUT", "DELETE")
                            .allowedHeaders("*");
                }
            };
        }
    }
}




