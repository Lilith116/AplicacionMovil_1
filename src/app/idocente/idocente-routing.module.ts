import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IDocentePage } from './idocente.page';

const routes: Routes = [
  {
    path: '',
    component: IDocentePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IDocentePageRoutingModule {}
