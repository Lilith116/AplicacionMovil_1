import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IDocentePageRoutingModule } from './idocente-routing.module';

import { IDocentePage } from './idocente.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IDocentePageRoutingModule
  ],
  declarations: [IDocentePage]
})
export class IDocentePageModule {}
