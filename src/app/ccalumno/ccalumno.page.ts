import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ccalumno',
  templateUrl: './ccalumno.page.html',
  styleUrls: ['./ccalumno.page.scss'],
})
export class CCAlumnoPage {
  constructor(private router: Router) {}

  navigateToHome() {
    this.router.navigate(['/home']);
  }
}
