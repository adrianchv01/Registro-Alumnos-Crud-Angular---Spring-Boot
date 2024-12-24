import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Alumno } from '../model/Alumno';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EditarAlumnoService {

  private baseUrl = environment.apiUrl;
  private alumnos: string = `${this.baseUrl}/lista`

  constructor(
    private http:HttpClient
  ) { }

  actualizarAlumno(id:number, alumno:Alumno):Observable<Alumno> {
    return this.http.put<Alumno>(`${this.alumnos}/${id}`, alumno);
  }

  obtenerAlumno(id: number): Observable<Alumno> {
    return this.http.get<Alumno>(`${this.alumnos}/${id}`);
  }

}
