import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CCAlumnoPage } from './ccalumno.page';

const routes: Routes = [
  {
    path: '',
    component: CCAlumnoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CCAlumnoPageRoutingModule {}
