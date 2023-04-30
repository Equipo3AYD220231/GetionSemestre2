package com.fabrica.gestion.Repository;
import com.fabrica.gestion.model.Professor;

import org.springframework.data.jpa.repository.JpaRepository;

// //interface para el repositorio de profesores, extiende de jparepository que es una
// interfaz de spring que nos permite hacer las operaciones basicas de crud
public interface ProffesorRepository extends JpaRepository<Professor, Long>{
    }
