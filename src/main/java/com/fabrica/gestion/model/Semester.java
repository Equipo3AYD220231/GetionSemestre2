package com.fabrica.gestion.model;
import jakarta.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name = "semestre")   //  <---  This is the name of the table in the database
public class Semester {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

 //  @Column
   // private int codigoSemester;
    @Column
    private LocalDate fechainicial;

    @Column
    private LocalDate fechafinal;

    @Column
    private LocalDate Evaluacion40;

    @Column
    private LocalDate evaluacionFinal;

    @Column
    private LocalDate habilitacion;

   /* public Semester(int codigoSemester) {
        this.codigoSemester = codigoSemester;
    }
*/
    public void setId(Long id) {
        this.id = id;
    }

    public LocalDate getFechainicial() {
        return fechainicial;
    }

    public void setFechainicial(LocalDate fechainicial) {
        this.fechainicial = fechainicial;
    }

    public LocalDate getFechafinal() {
        return fechafinal;
    }

    public void setFechafinal(LocalDate fechafinal) {
        this.fechafinal = fechafinal;
    }

    public LocalDate getEvaluacionFinal() {
        return evaluacionFinal;
    }

    public void setEvaluacionFinal(LocalDate evaluacionFinal) {
        this.evaluacionFinal = evaluacionFinal;
    }

    public LocalDate getHabilitacion() {
        return habilitacion;
    }

    public void setHabilitacion(LocalDate habilitacion) {
        this.habilitacion = habilitacion;
    }

    public Long getId() {
        return id;
    }
    public LocalDate getEvaluacion40() {
        return Evaluacion40;
    }

    public void setEvaluacion40(LocalDate evaluacion40) {
        Evaluacion40 = evaluacion40;
    }
}
