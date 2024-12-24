import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Alumno } from 'src/app/model/Alumno';
import { EditarAlumnoService } from 'src/app/services/editar-alumno.service';

@Component({
  selector: 'app-editar-alumno',
  templateUrl: './editar-alumno.component.html',
  styleUrl: './editar-alumno.component.css'
})
export class EditarAlumnoComponent implements OnInit{
  id: number;
  alumno: Alumno = new Alumno();

  constructor(
    private actualizarAlumno: EditarAlumnoService,
    private route: ActivatedRoute,
    private router: Router,
    private cd: ChangeDetectorRef
  ) {}

  formCard: FormGroup = new FormGroup({
      nombre: new FormControl(''),
      apellido: new FormControl(''),
      dni: new FormControl(''),
      ciclo: new FormControl(''),
      estado: new FormControl(''),
      usuario: new FormControl(''),
      fecha: new FormControl('')
  })

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      this.id = id != null ? +id : 0;


      this.actualizarAlumno.obtenerAlumno(this.id).subscribe(
        data => {
          console.log("Datos del producto recibidos:", data);

          if (Array.isArray(data)) {
            this.alumno = data[0];
          } else {
            this.alumno = data;
          }


          this.formCard.patchValue({
            nombre: this.alumno.nombre,
            apellido: this.alumno.apellido,
            dni: this.alumno.dni,
            ciclo: this.alumno.ciclo,
            estado: this.alumno.estado,
            usuario: this.alumno.usuario,
            fecha: this.alumno.fecha,
          });


          this.cd.detectChanges();
        },
        error => console.log("Error al obtener el Alumno:", error)
      );
    });
  }

  onSubmit() {
    this.actualizarAlumno.actualizarAlumno(this.id, this.formCard.value).subscribe(
      data => {
        console.log('Alumno actualizado', data);
        this.redireccionAlumnos(); 
      },
      error => {
        console.error('Error actualizando el Alumno', error);
      }
    );
  }

  redireccionAlumnos() {
    this.router.navigate(['/alumnos']);
  }

}
