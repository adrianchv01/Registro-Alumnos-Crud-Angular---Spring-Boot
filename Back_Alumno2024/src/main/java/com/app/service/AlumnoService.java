package com.app.service;

import com.app.model.Alumno;
import org.springframework.http.ResponseEntity;

import java.util.List;
import java.util.Optional;

public interface AlumnoService {

    public ResponseEntity<List<Alumno>> listarAlumnos();
    public ResponseEntity<Optional<Alumno>> getAlumno(Long id);
    public ResponseEntity<Alumno> guardarAlumno(Alumno alumno);
    public ResponseEntity<Alumno> actualizarAlumno(Long id,Alumno alumno);
    public void eliminarAlumno(Long id);

}
