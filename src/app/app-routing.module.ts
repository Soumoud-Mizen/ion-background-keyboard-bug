import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/authentification/log-in/log-in.module').then( m => m.LogInPageModule)
  },
  {
    path: 'log-in',
    loadChildren: () => import('./pages/authentification/log-in/log-in.module').then( m => m.LogInPageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./pages/tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'calculateur',
    loadChildren: () => import('./pages/home/calculateur/calculateur.module').then( m => m.CalculateurPageModule)
  },
  
  {
    path: 'activate-account',
    loadChildren: () => import('./pages/authentification/activate-account/activate-account.module').then( m => m.ActivateAccountPageModule)
  },
  {
    path: 'create-account',
    loadChildren: () => import('./pages/authentification/create-account/create-account.module').then( m => m.CreateAccountPageModule)
  },
  {
    path: 'activate-account',
    loadChildren: () => import('./pages/authentification/activate-account/activate-account.module').then( m => m.ActivateAccountPageModule)
  },
 
 
  
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
