import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {

    path: '',
    component: TabsPage,
    children: [
      {
        path: '',
        loadChildren: () => import('src/app/pages/home/calculateur/calculateur.module').then(m => m.CalculateurPageModule)
      },
      {
        path: 'calculateur',
        loadChildren: () => import('src/app/pages/home/calculateur/calculateur.module').then(m => m.CalculateurPageModule)
      },
      {
        path: 'contact',
        loadChildren: () => import('src/app/pages/home/contact/contact.module').then(m => m.Tab2PageModule)
      },
      {
        path: 'video',
        loadChildren: () => import('src/app/pages/home/video/video.module').then(m => m.Tab1PageModule)
      },
      {
        path: 'novaeight',
        loadChildren: () => import('src/app/pages/home/novaeight/novaeight.module').then(m => m.Tab3PageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/calculateur',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/calculateur',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule { }
