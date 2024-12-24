import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Alumno } from 'src/app/model/Alumno';
import { AlumnoService } from 'src/app/services/alumno.service';
import { LoginService } from 'src/app/services/login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrl: './alumnos.component.css'
})
export class AlumnosComponent {

  Alumnos? : Alumno[]
  constructor(
    private _alumnoService: AlumnoService,
    private _loginService: LoginService,
    private router: Router,
    private route: Router
  ){}
  ngOnInit(): void {
    this.obtenerAlumnos();
  }


  obtenerAlumnos(): void{
    this._alumnoService.getAlumnos().subscribe(
      data => {
        console.log("Datos recibidos:", data);
        this.Alumnos = data;
      },
      error => {
        console.log('Error al obtener los datos',error);
      }
    )
  }
  actualizarAlumno(alumnos:Alumno):void{
    console.log("Editando Alumnos: ", alumnos);
    localStorage.setItem("id",alumnos.id.toString());
    this.router.navigate(['actualizarAlumnos']);
  }

  eliminarAlumno(alumnos: Alumno): void {
    if (!alumnos || !alumnos.id) {
      console.log('Producto no válido para eliminar');
      return;
    }
    const confirmacion = window.confirm(`¿Estás seguro de que quieres eliminar el alumno "${alumnos.nombre}"?`);

    if (confirmacion) {
      this._alumnoService.eliminarAlumno(alumnos.id).subscribe(
        data => {
          console.log('Producto eliminado:', alumnos.id);
          this.obtenerAlumnos(); 

        },
        error => {
          console.log('Error eliminando el producto:', error);
        }
      );
    }
  }

  logout(){
    Swal.fire({
      title: '¿Estás seguro de cerrar sesion?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Sí',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this._loginService.logout()
        this.route.navigate([''])
      }
    });

  }
  

}
