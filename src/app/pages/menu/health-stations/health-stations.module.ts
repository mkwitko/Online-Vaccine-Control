import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HealthStationsPageRoutingModule } from './health-stations-routing.module';

import { HealthStationsPage } from './health-stations.page';
import { MyHeaderModule } from 'src/app/components/header/my-header/my-header.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HealthStationsPageRoutingModule,
    MyHeaderModule
  ],
  declarations: [HealthStationsPage]
})
export class HealthStationsPageModule {}
