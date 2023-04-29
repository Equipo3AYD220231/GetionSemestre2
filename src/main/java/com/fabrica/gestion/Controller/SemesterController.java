package com.fabrica.gestion.Controller;

import com.fabrica.gestion.Repository.SemesterRepository;
import com.fabrica.gestion.model.Semester;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class SemesterController {

    @Autowired
    private SemesterRepository semesterRepository;
   /*metodo encargado de pedir al Api rest los registro de la BD, desde el front   */
    @GetMapping("/semesters")
    public List<Semester> getSemester() {
        return semesterRepository.findAll();
    }

    /*metodo encargado de enviar informacion a  la BD mediante APiRESt, desde el front.   */
    @PostMapping(value="/savesemester")
    public String saveSemesters(@RequestBody Semester semester) {
        semesterRepository.save(semester);
        return "saved semesters";
    }
    /*metodo encargado de enviar informacion a  la BD mediante APiRESt, desde el front.   */
    @PutMapping(value= "/updatesemester/{id}")
    public String updateSemester(@PathVariable Long id, @RequestBody Semester semester) {
        Semester  updatedSemester = semesterRepository.findById(id).get();
        updatedSemester.setFechainicial(semester.getFechainicial());
        updatedSemester.setFechafinal(semester.getFechafinal());
        updatedSemester.setEvaluacionFinal(semester.getEvaluacionFinal());
        updatedSemester.setEvaluacion40(semester.getEvaluacion40());
        updatedSemester.setHabilitacion(semester.getHabilitacion());
        semesterRepository.save(updatedSemester);

        return "updated semester";
    }

    /*metodo encargado de enviar informacion a  la BD mediante APiRESt, desde el front.   */
    @DeleteMapping(value = "/deletesemester/{id}")
    public String deleteSemester(@PathVariable Long id) {
        Semester deletedSemester = semesterRepository.findById(id).get();
        semesterRepository.delete(deletedSemester);
        return "deleted semester";
    }

}




