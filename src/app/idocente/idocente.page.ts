import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FirestoreService } from '../services/firestore.service';
import { Router } from '@angular/router';
import { User } from '../models/user.model';

@Component({
  selector: 'app-idocente',
  templateUrl: './idocente.page.html',
  styleUrls: ['./idocente.page.scss'],
})
export class IDocentePage {
  docenteForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private firestoreService: FirestoreService,
    private router: Router
  ) {

    this.docenteForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(3)]],
    });
  }
  ngOnInit() {
  }
  navigateToHome() {
    this.router.navigate(['/home']);
  }
  navigateToRContrasenna(){
    this.router.navigate(['/rcontrasenna']);
  }
  async createDocente() {
    if (this.docenteForm.valid) {
      const { email, password, name } = this.docenteForm.value;

      const docenteData: User = {
        name: name,
        email: email,
        password: password,
        userType: 'docentes',
        createdAt: new Date()
      };
  
      try {
        await this.firestoreService.createUser(docenteData, 'docentes');
        console.log('Docente creado exitosamente');
        this.router.navigate(['/home']);
      } catch (error) {
        console.error('Error al crear docente:', error);
      }
    }
  }
  
  

}
