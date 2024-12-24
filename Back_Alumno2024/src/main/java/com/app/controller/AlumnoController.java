package com.app.controller;

import com.app.model.Alumno;
import com.app.serviceImpl.AlumnoServiceImpl;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@AllArgsConstructor
@RequestMapping("/alumnos")
public class AlumnoController {

    @Autowired
    private AlumnoServiceImpl alumnoServiceImpl;

    @GetMapping("/lista")
    public ResponseEntity<List<Alumno>> findAll() {
        return alumnoServiceImpl.listarAlumnos();
    }

    @GetMapping("/lista/{id}")
    public ResponseEntity<Optional<Alumno>> getAlumno(@PathVariable Long id) {
        return alumnoServiceImpl.getAlumno(id);
    }

    @PostMapping("/guardar")
    public ResponseEntity<Alumno> addAlumno(@RequestBody Alumno alumno) {
        return alumnoServiceImpl.guardarAlumno(alumno);
    }

    @DeleteMapping("/lista/{id}")
    public void deleteAlumno(@PathVariable Long id) {
        alumnoServiceImpl.eliminarAlumno(id);
    }

    @PutMapping("/lista/{id}")
    public ResponseEntity<Alumno> updateAlumno(@RequestBody Alumno alumno, @PathVariable Long id) {
        Alumno alumnoActualizado = alumnoServiceImpl.actualizarAlumno(id, alumno).getBody();
        return ResponseEntity.ok(alumnoActualizado);
    }

}
