import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { videoPage } from './video.page';

import { videoPageRoutingModule } from './video-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    videoPageRoutingModule
  ],
  declarations: [videoPage]
})
export class Tab1PageModule {}
