import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'calculateur',
    loadChildren: () => import('./pages/home/calculateur/calculateur.module').then( m => m.CalculateurPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/authentification/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'acivate-account',
    loadChildren: () => import('./pages/authentification/acivate-account/acivate-account.module').then( m => m.AcivateAccountPageModule)
  },
  {
    path: 'create-account',
    loadChildren: () => import('./pages/authentification/create-account/create-account.module').then( m => m.CreateAccountPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
