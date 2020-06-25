import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    
    path: 'tabs',
    component: TabsPage,
    children: [
     
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
        path: 'calculateur',
        loadChildren: () => import('src/app/pages/home/calculateur/calculateur.module').then(m => m.CalculateurPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/contact',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/contact',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
