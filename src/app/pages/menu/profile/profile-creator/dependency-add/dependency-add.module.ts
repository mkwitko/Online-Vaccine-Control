import { MyHeaderModule } from './../../../../../components/header/my-header/my-header.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DependencyAddPageRoutingModule } from './dependency-add-routing.module';

import { DependencyAddPage } from './dependency-add.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DependencyAddPageRoutingModule,
    MyHeaderModule
  ],
  declarations: [DependencyAddPage]
})
export class DependencyAddPageModule {}
