package com.fabrica.gestion.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Decanatura {


    @Id
    private Long idDecanatura;

    @Column
    private String nombreDecanatura;


    public void setIdDecanatura(Long idDecanatura) {
        this.idDecanatura = idDecanatura;
    }

    public Long getIdDecanatura() {
        return idDecanatura;
    }
}
