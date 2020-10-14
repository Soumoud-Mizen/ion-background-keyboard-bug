import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NovaeightPage } from './novaeight.page';

import { NovaeightPageRoutingModule } from './novaeight-routing.module'
import { SafeHtmlPipe } from 'src/app/pipes/safe-html.pipe';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: NovaeightPage }]),
    NovaeightPageRoutingModule,
  ],
  declarations: [NovaeightPage, SafeHtmlPipe]
})
export class Tab3PageModule {}
