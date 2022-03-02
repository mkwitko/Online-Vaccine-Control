import { AuthGuard } from './../../../guards/auth.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfilePage } from './profile.page';

const routes: Routes = [
  {
    path: '',
    component: ProfilePage
  },
  {
    path: 'responsibles',
    loadChildren: () => import('./profile-creator/responsibles/responsibles.module').then( m => m.ResponsiblesPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'dependency',
    loadChildren: () => import('./profile-creator/dependency/dependency.module').then( m => m.DependencyPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'dependency-add',
    loadChildren: () => import('./profile-creator/dependency-add/dependency-add.module').then( m => m.DependencyAddPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'responsibles-add',
    loadChildren: () => import('./profile-creator/responsibles-add/responsibles-add.module').then( m => m.ResponsiblesAddPageModule),
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfilePageRoutingModule {}
