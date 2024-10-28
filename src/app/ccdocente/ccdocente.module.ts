import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CCDocentePageRoutingModule } from './ccdocente-routing.module';

import { CCDocentePage } from './ccdocente.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    CCDocentePageRoutingModule
  ],
  declarations: [CCDocentePage]
})
export class CCDocentePageModule {}
