package com.app.model;

import lombok.Data;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Data
@Table(name = "ALUMNO")
public class Alumno {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String nombre;

    @Column(nullable = false)
    private String apellido;

    @Column(nullable = false, length = 8)
    private String dni;

    @Column(nullable = false)
    private int ciclo;

    @Column(nullable = false, length = 1)
    private String estado;

    @Column(name = "nombre_usuario")
    private String usuario;

    @Column(nullable = false)
    private LocalDateTime fecha;
}
