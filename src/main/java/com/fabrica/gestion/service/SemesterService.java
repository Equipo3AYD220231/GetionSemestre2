package com.fabrica.gestion.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.fabrica.gestion.interfaces.ISemesterService;
import com.fabrica.gestion.model.Semester;
import com.fabrica.gestion.repository.SemesterRepository;

@Service
public class SemesterService implements ISemesterService {

    private SemesterRepository semesterRepository;

    public SemesterService(SemesterRepository semesterRepository){
        this.semesterRepository = semesterRepository;
    }

    @Override
    public List<Semester> getSemester() {
        return semesterRepository.findAll();
    }

    /*metodo encargado de enviar informacion a  la BD mediante APiRESt, desde el front.   */
    public String saveSemesters( Semester semester) {
        semesterRepository.save(semester);
        return "saved semesters";
    }
    /*metodo encargado de enviar informacion a  la BD mediante APiRESt, desde el front.   */
    public String updateSemester( Long id,  Semester semester) {
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
    public String deleteSemester( Long id) {
        Semester deletedSemester = semesterRepository.findById(id).get();
        semesterRepository.delete(deletedSemester);
        return "deleted semester";
    }

}
