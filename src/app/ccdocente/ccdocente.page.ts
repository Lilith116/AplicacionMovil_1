import { Component, OnInit } from '@angular/core';
import{Router} from '@angular/router';

@Component({
  selector: 'app-ccdocente',
  templateUrl: './ccdocente.page.html',
  styleUrls: ['./ccdocente.page.scss'],
})
export class CCDocentePage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  navigateToHome(){
    this.router.navigate(['/home']);
  }

}
