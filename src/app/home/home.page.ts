import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FirestoreService } from '../services/firestore.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(private router: Router, private firestore:FirestoreService) {}

  navigateToCCAlumno() {
    this.router.navigate(['/ccalumno']);
  }
  navigateToCCDocente(){
    this.router.navigate(['/ccdocente']);
  }
  navigateToIAlumno(){
    this.router.navigate(['/ialumno']);
  }
  navigateToIDocente(){
    this.router.navigate(['/idocente']);
  }
  
  getestudiantes(){
    this.firestore.getCollection()
  }

  

  
}
