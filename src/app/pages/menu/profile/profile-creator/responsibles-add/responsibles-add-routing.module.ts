import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResponsiblesAddPage } from './responsibles-add.page';

const routes: Routes = [
  {
    path: '',
    component: ResponsiblesAddPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResponsiblesAddPageRoutingModule {}
