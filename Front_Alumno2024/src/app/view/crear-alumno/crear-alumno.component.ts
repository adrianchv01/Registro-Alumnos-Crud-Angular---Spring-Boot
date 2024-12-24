import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlumnoService } from 'src/app/services/alumno.service';

@Component({
  selector: 'app-crear-alumno',
  templateUrl: './crear-alumno.component.html',
  styleUrl: './crear-alumno.component.css'
})
export class CrearAlumnoComponent {

  formAlumno: FormGroup;

  constructor(private alumnoService: AlumnoService, private router: Router) {
    this.formAlumno = new FormGroup({
      nombre: new FormControl('', [Validators.required]),
      apellido: new FormControl('', [Validators.required]),
      dni: new FormControl('', [Validators.required]),
      ciclo: new FormControl('', [Validators.required]),
      estado: new FormControl('', [Validators.required]),
      usuario: new FormControl('', [Validators.required]),
      fecha: new FormControl('', [Validators.required])
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    if (this.formAlumno.valid) {
      this.alumnoService.createAlumno(this.formAlumno.value).subscribe(data => {
        console.log('Alumno creado:', data);
        this.router.navigate(['/alumnos']);  
      }, error => {
        console.error('Error al crear Alumno', error);
      });
    }
  }

}
