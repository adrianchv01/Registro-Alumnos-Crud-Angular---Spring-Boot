DROP DATABASE IF EXISTS APPCIBERTEC2024;
CREATE DATABASE APPCIBERTEC2024;
USE APPCIBERTEC2024;


CREATE TABLE USUARIO (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL,
    apellido VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL,
    password VARCHAR(255) NOT NULL,
    fecha DATETIME,
    UNIQUE (nombre) 
);

INSERT INTO USUARIO (nombre, apellido, email, password, fecha)
VALUES
('Javier', 'Galarza Calderon', 'javier2024@cibertec.edu.pe', '$2a$10$XWhvcslwACBf/33lXrJgTumQYV/RhFwKuKWg/2sovDLtoqFOw/SAG', now()),
('Adrian', 'Chavez Villa', 'adrian@cibertec.edu.pe', '$2a$10$m18Eq.alk3.9c67DhxQj4eLqlGjD7R71NvzAr7vSr2V0pTggwnH1G', now());

select * from usuario;

CREATE TABLE ALUMNO (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL,
    apellido VARCHAR(50) NOT NULL,
    dni VARCHAR(8) NOT NULL,
    ciclo TINYINT CHECK (ciclo BETWEEN 1 AND 6),
    estado VARCHAR(1) CHECK (estado IN ('A', 'I')),
    nombre_usuario VARCHAR(50),
    fecha DATETIME,
    FOREIGN KEY (nombre_usuario) REFERENCES USUARIO(nombre) ON DELETE CASCADE
);

INSERT INTO ALUMNO (nombre, apellido, dni, ciclo, estado, nombre_usuario, fecha)
VALUES
('Jose', 'Fernandez', '12345678', 1, 'A', 'Javier', now()),
('Valeria', 'Gomez', '23456789', 2, 'I', 'Javier', now()),
('Pedro', 'Ramirez', '34567890', 3, 'A', 'Adrian', now());

select * from alumno;