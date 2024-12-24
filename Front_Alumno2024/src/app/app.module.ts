import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthInterceptor } from './helpers/auth.interceptor';
import { AuthGuard } from './helpers/auth.guard';
import { AlumnosComponent } from './view/alumnos/alumnos.component';
import { CrearAlumnoComponent } from './view/crear-alumno/crear-alumno.component';
import { EditarAlumnoComponent } from './view/editar-alumno/editar-alumno.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AlumnosComponent,
    CrearAlumnoComponent,
    EditarAlumnoComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot([
      {path: "", component: LoginComponent},
      {path: "alumnos", component: AlumnosComponent, canActivate: [AuthGuard]},
      {path: "crear-alumno", component: CrearAlumnoComponent, canActivate: [AuthGuard]},
      {path: "actualizar-alumno/:id", component: EditarAlumnoComponent, canActivate: [AuthGuard]}
    ])
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
