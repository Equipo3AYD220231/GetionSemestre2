package com.fabrica.gestion.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import org.springframework.web.bind.annotation.GetMapping;
@Entity
public class DepartmentChief {

    @Id
    @Column
    private Long id;
    @Column
    private String name;

    @Column
    private String Department;



    public DepartmentChief() {
    }


    public DepartmentChief(String name) {
        this.name = name;


    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getId() {
        return id;
    }
}