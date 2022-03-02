import { MyHeaderModule } from './../../../../../components/header/my-header/my-header.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResponsiblesAddPageRoutingModule } from './responsibles-add-routing.module';

import { ResponsiblesAddPage } from './responsibles-add.page';
import { MyFormModule } from 'src/app/components/forms/form/forms.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResponsiblesAddPageRoutingModule,
    MyHeaderModule,
    MyFormModule
  ],
  declarations: [ResponsiblesAddPage]
})
export class ResponsiblesAddPageModule {}
