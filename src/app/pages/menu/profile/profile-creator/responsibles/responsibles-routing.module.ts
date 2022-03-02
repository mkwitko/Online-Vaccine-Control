import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResponsiblesPage } from './responsibles.page';

const routes: Routes = [
  {
    path: '',
    component: ResponsiblesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResponsiblesPageRoutingModule {}
