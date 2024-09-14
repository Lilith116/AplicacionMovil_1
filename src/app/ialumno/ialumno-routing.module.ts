import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IAlumnoPage } from './ialumno.page';

const routes: Routes = [
  {
    path: '',
    component: IAlumnoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IAlumnoPageRoutingModule {}
