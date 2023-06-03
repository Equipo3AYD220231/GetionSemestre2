package com.fabrica.gestion.interfaces;
import java.util.List;

import com.fabrica.gestion.model.Semester;


public interface ISemesterService {
    public List<Semester> getSemester();

    /*metodo encargado de enviar informacion a  la BD mediante APiRESt, desde el front.   */
    public String saveSemesters( Semester semester);
    /*metodo encargado de enviar informacion a  la BD mediante APiRESt, desde el front.   */
    public String updateSemester( Long id, Semester semester);

    /*metodo encargado de enviar informacion a  la BD mediante APiRESt, desde el front.   */
    public String deleteSemester( Long id);
}
