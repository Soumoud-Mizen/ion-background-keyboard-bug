import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AcivateAccountPageRoutingModule } from './acivate-account-routing.module';

import { AcivateAccountPage } from './acivate-account.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AcivateAccountPageRoutingModule
  ],
  declarations: [AcivateAccountPage]
})
export class AcivateAccountPageModule {}
