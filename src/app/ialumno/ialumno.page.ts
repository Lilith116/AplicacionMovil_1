import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ialumno',
  templateUrl: './ialumno.page.html',
  styleUrls: ['./ialumno.page.scss'],
})
export class IAlumnoPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  navigateToHome() {
    this.router.navigate(['/home']);
  }
  navigateToRContrasenna(){
    this.router.navigate(['/rcontrasenna']);
  }

}
