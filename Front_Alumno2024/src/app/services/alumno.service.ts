import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Alumno } from '../model/Alumno';

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {

  private baseUrl = environment.apiUrl;
  private alumnos: string = `${this.baseUrl}/lista`
  private guardarAlumnos: string = `${this.baseUrl}/guardar`

  constructor(
    private http:HttpClient
  ) { }

  getAlumnos(): Observable<any>{
    return this.http.get(this.alumnos);
  }

  createAlumno(alumno: Alumno): Observable<Alumno> {
    return this.http.post<Alumno>(`${this.guardarAlumnos}`, alumno);
  }
  

  updateAlumno(id: number, alumno: Alumno): Observable<Alumno> {
    return this.http.put<Alumno>(`${this.alumnos}/${id}`, alumno);
  }

  eliminarAlumno(id:number):Observable<any>{
    return this.http.delete(this.alumnos + '/' + id)
  }

}
