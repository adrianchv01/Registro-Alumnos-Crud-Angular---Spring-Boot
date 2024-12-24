package com.app.serviceImpl;

import com.app.model.Alumno;
import com.app.repository.AlumnoRepository;
import com.app.service.AlumnoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import javax.persistence.EntityNotFoundException;
import java.util.List;
import java.util.Optional;

@Service
public class AlumnoServiceImpl implements AlumnoService {

    @Autowired
    private AlumnoRepository alumnoRepository;

    @Override
    public ResponseEntity<List<Alumno>> listarAlumnos() {
        return ResponseEntity.ok(alumnoRepository.findAll());
    }

    @Override
    public ResponseEntity<Optional<Alumno>> getAlumno(Long id) {
        return ResponseEntity.ok(alumnoRepository.findById(id));
    }

    @Override
    public ResponseEntity<Alumno> guardarAlumno(Alumno alumno) {
        return ResponseEntity.ok(alumnoRepository.save(alumno));
    }

    @Override
    public ResponseEntity<Alumno> actualizarAlumno(Long id,Alumno alumno) {
        Alumno alumnoActual = alumnoRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Alumno no encontrado con id: " + id));

        alumnoActual.setNombre(alumno.getNombre());
        alumnoActual.setApellido(alumno.getApellido());
        alumnoActual.setDni(alumno.getDni());
        alumnoActual.setCiclo(alumno.getCiclo());
        alumnoActual.setEstado(alumno.getEstado());
        alumnoActual.setUsuario(alumno.getUsuario());
        alumnoActual.setFecha(alumno.getFecha());
        return ResponseEntity.ok(alumnoRepository.save(alumnoActual));
    }

    @Override
    public void eliminarAlumno(Long id) {
        Optional<Alumno> alumno = alumnoRepository.findById(id);
        if (alumno.isPresent()) {
            Alumno alum = alumno.get();
            alumnoRepository.delete(alum);
        }

    }
}
