/* eslint-disable max-len */
import { AuthGuard } from './guards/auth.guard';
import { LoginGuard } from './guards/login.guard';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/auth/login/login.module').then( m => m.LoginPageModule),
    canActivate: [LoginGuard]
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/auth/register/register.module').then( m => m.RegisterPageModule),
    canActivate: [LoginGuard]
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/menu/home/home.module').then( m => m.HomePageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'vaccines-table',
    loadChildren: () => import('./pages/menu/vaccines-table/vaccines-table.module').then( m => m.VaccinesTablePageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'vaccines-history',
    loadChildren: () => import('./pages/menu/vaccines-history/vaccines-history.module').then( m => m.VaccinesHistoryPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'health-stations',
    loadChildren: () => import('./pages/menu/health-stations/health-stations.module').then( m => m.HealthStationsPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'news',
    loadChildren: () => import('./pages/menu/news/news.module').then( m => m.NewsPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'schedule',
    loadChildren: () => import('./pages/menu/schedule/schedule.module').then( m => m.SchedulePageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'reports',
    loadChildren: () => import('./pages/menu/reports/reports.module').then( m => m.ReportsPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/menu/profile/profile.module').then( m => m.ProfilePageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'partners',
    loadChildren: () => import('./pages/menu/partners/partners.module').then( m => m.PartnersPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'contact',
    loadChildren: () => import('./pages/menu/contact/contact.module').then( m => m.ContactPageModule),
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
