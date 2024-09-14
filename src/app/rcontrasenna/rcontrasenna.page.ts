import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rcontrasenna',
  templateUrl: './rcontrasenna.page.html',
  styleUrls: ['./rcontrasenna.page.scss'],
})
export class RcontrasennaPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  navigateToHome() {
    this.router.navigate(['/home']);
  }
  navigateToIDocente(){
    this.router.navigate(['/idocente'])
  }
  navigateToIAlumno(){
    this.router.navigate(['/ialumno'])
  }

}
