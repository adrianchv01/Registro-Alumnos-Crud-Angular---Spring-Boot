export class Alumno {
    id: number;
    nombre: string;
    apellido: string;
    dni: string;
    ciclo: number;
    estado: string;
    usuario: string;
    fecha: Date;  
  
    constructor(
      id: number =0,
      nombre: string='',
      apellido: string='',
      dni: string='',
      ciclo: number=0,
      estado: string='',
      usuario: string='',
      fecha: Date = new Date()
    ) {
      this.id = id;
      this.nombre = nombre;
      this.apellido = apellido;
      this.dni = dni;
      this.ciclo = ciclo;
      this.estado = estado;
      this.usuario = usuario;
      this.fecha = fecha;
    }
  }
  