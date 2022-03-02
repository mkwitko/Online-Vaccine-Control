import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VaccinesHistoryPageRoutingModule } from './vaccines-history-routing.module';

import { VaccinesHistoryPage } from './vaccines-history.page';
import { MyHeaderModule } from 'src/app/components/header/my-header/my-header.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VaccinesHistoryPageRoutingModule,
    MyHeaderModule
  ],
  declarations: [VaccinesHistoryPage]
})
export class VaccinesHistoryPageModule {}
