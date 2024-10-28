import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FirestoreService } from '../services/firestore.service';
import { User } from '../models/user.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-ccalumno',
  templateUrl: './ccalumno.page.html',
  styleUrls: ['./ccalumno.page.scss'],
})
export class CCAlumnoPage {
  alumnoForm: FormGroup;
  constructor(private router: Router,private firestoreService : FirestoreService,
    private AuthService: AuthService,
    private fb:FormBuilder
  ) {
    this.alumnoForm = this.fb.group({
      nombre: ['',Validators.required],
      email: ['',[Validators.required, Validators.email]],
      password:['',[Validators.required, Validators.minLength(3)]],
    });
  }
  

  navigateToHome() {
    this.router.navigate(['/home']);
  }

  async createAlumno() {
    if (this.alumnoForm.valid) {
      const { email, password, nombre } = this.alumnoForm.value;

  
      const alumnoData: User = {
        name: nombre,
        email: email,
        password: password,
        userType: 'alumnos', 
        createdAt: new Date() 
      };
  
      try {
        await this.firestoreService.createUser(alumnoData, 'alumnos');
        console.log('Alumno creado exitosamente');
        this.router.navigate(['/home']); 
      } catch (error) {
        console.error('Error al crear alumno:', error);
      }
    }
  }
  
  



  
}
