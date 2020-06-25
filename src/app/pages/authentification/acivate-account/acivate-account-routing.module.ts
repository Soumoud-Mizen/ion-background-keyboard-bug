import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AcivateAccountPage } from './acivate-account.page';

const routes: Routes = [
  {
    path: '',
    component: AcivateAccountPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AcivateAccountPageRoutingModule {}
