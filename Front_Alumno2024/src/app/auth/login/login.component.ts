import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{

  usuario: any[] = []
  formLogin: FormGroup

  constructor(
    private _loginService : LoginService,
    private route: Router
  ) { }

  ngOnInit(): void {
    this.initForm()
  }

  initForm() {
    this.formLogin = new FormGroup({
      email: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required])
    })
  }

  login(){
    if(this.formLogin.valid){
      console.log("Acceso", this.formLogin.value)
      this._loginService.ingresar(this.formLogin.value)
      .subscribe({
        next: (res) => {
          console.log("Response: ", res)
          this.route.navigate(['/alumnos'])
        },
        error: (err: HttpErrorResponse) => {
          this.alertaError()
        }
      });
    }
  }

  alertaError(){
    Swal.fire({
      position: "top-end",
      icon: "error",
      title: "Correo o contraseña incorrecta ",
      showConfirmButton: false,
      timer: 1500
    });
    this.formLogin.reset();
  }
  

}
