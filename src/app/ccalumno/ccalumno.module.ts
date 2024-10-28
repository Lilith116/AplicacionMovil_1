import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CCAlumnoPageRoutingModule } from './ccalumno-routing.module';

import { CCAlumnoPage } from './ccalumno.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    CCAlumnoPageRoutingModule
  ],
  declarations: [CCAlumnoPage]
})
export class CCAlumnoPageModule {}
