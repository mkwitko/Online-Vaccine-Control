import { MyHeaderModule } from './../../../components/header/my-header/my-header.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import { MyVaccinesTakenModule } from 'src/app/components/charts/vaccines-taken/vaccines-taken.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    MyHeaderModule,
    MyVaccinesTakenModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
