import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(private router: Router) {}

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
  

  
}
