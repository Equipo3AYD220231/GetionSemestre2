package com.fabrica.gestion.Repository;

import com.fabrica.gestion.model.Semester;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SemesterRepository extends JpaRepository<Semester, Long>{
}
