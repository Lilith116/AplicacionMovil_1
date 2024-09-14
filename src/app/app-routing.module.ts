import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'ccalumno',
    loadChildren: () => import('./ccalumno/ccalumno.module').then( m => m.CCAlumnoPageModule)
  },
  {
    path: 'ialumno',
    loadChildren: () => import('./ialumno/ialumno.module').then( m => m.IAlumnoPageModule)
  },
  {
    path: 'ccdocente',
    loadChildren: () => import('./ccdocente/ccdocente.module').then( m => m.CCDocentePageModule)
  },
  {
    path: 'idocente',
    loadChildren: () => import('./idocente/idocente.module').then( m => m.IDocentePageModule)
  },
  {
    path: 'rcontrasenna',
    loadChildren: () => import('./rcontrasenna/rcontrasenna.module').then( m => m.RcontrasennaPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
