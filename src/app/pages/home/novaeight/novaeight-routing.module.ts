import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NovaeightPage } from './novaeight.page';

const routes: Routes = [
  {
    path: '',
    component: NovaeightPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NovaeightPageRoutingModule {}
