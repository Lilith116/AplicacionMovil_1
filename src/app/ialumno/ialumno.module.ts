import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IAlumnoPageRoutingModule } from './ialumno-routing.module';

import { IAlumnoPage } from './ialumno.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IAlumnoPageRoutingModule
  ],
  declarations: [IAlumnoPage]
})
export class IAlumnoPageModule {}
