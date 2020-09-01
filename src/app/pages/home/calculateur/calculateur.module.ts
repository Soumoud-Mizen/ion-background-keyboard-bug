import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CalculateurPageRoutingModule } from './calculateur-routing.module';

import { CalculateurPage } from './calculateur.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CalculateurPageRoutingModule
  ],
  declarations: [CalculateurPage],
  schemas:[NO_ERRORS_SCHEMA]
})
export class CalculateurPageModule {}
