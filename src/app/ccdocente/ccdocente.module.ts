import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CCDocentePageRoutingModule } from './ccdocente-routing.module';

import { CCDocentePage } from './ccdocente.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CCDocentePageRoutingModule
  ],
  declarations: [CCDocentePage]
})
export class CCDocentePageModule {}
