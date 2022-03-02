import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DependencyPage } from './dependency.page';

const routes: Routes = [
  {
    path: '',
    component: DependencyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DependencyPageRoutingModule {}
