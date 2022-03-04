import { MyAccordionModule } from './../../../components/accordion/accordion/accordion.module';
import { MyHeaderModule } from './../../../components/header/my-header/my-header.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VaccinesTablePageRoutingModule } from './vaccines-table-routing.module';

import { VaccinesTablePage } from './vaccines-table.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VaccinesTablePageRoutingModule,
    MyHeaderModule,
    MyAccordionModule
  ],
  declarations: [VaccinesTablePage]
})
export class VaccinesTablePageModule {}
