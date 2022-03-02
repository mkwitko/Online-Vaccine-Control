import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VaccinesHistoryPage } from './vaccines-history.page';

const routes: Routes = [
  {
    path: '',
    component: VaccinesHistoryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VaccinesHistoryPageRoutingModule {}
