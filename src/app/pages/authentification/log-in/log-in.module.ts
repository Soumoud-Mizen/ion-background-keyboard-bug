import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LogInPageRoutingModule } from './log-in-routing.module';

import { LogInPage } from './log-in.page';
import { ForgotCodeComponent } from 'src/app/components/forgot-code/forgot-code.component';


@NgModule({
  imports: [
    CommonModule, 
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    LogInPageRoutingModule
  ],
  declarations: [LogInPage, ForgotCodeComponent]
})
export class LogInPageModule {}


