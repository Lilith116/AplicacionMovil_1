import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CCDocentePage } from './ccdocente.page';

const routes: Routes = [
  {
    path: '',
    component: CCDocentePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CCDocentePageRoutingModule {}
