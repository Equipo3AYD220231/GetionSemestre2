package com.fabrica.gestion.model;

import jakarta.persistence.*;

@Entity
public class Course {

        @Id // Primary key
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        private Long id;
        private String nombre;

        @ManyToOne
        private Professor professor;

        @ManyToOne
        private Horario horario;

        // Getters y setters

        public Long getId() {
                return id;
        }

        public void setId(Long id) {
                this.id = id;
        }

        public String getNombre() {
                return nombre;
        }

        public void setNombre(String nombre) {
                this.nombre = nombre;
        }

        public Professor getProfessor() {
                return professor;
        }

        public void setProfessor(Professor professor) {
                this.professor = professor;
        }

        public Horario getHorario() {
                return horario;
        }

        public void setHorario(Horario horario) {
                this.horario = horario;
        }
}
