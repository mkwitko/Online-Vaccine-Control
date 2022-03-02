import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DependencyAddPage } from './dependency-add.page';

const routes: Routes = [
  {
    path: '',
    component: DependencyAddPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DependencyAddPageRoutingModule {}
