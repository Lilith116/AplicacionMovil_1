import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-idocente',
  templateUrl: './idocente.page.html',
  styleUrls: ['./idocente.page.scss'],
})
export class IDocentePage implements OnInit {

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
