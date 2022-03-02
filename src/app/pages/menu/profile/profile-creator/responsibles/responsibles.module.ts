import { MyHeaderModule } from './../../../../../components/header/my-header/my-header.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResponsiblesPageRoutingModule } from './responsibles-routing.module';

import { ResponsiblesPage } from './responsibles.page';
import { MyFabModule } from 'src/app/components/fab/fab/fab.module';
import { MySkeletonCardModule } from 'src/app/components/skeleton/skeleton-card/skeleton-card.module';
import { MyCardModule } from 'src/app/components/cards/card/card.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResponsiblesPageRoutingModule,
    MyHeaderModule,
    MyFabModule,
    MySkeletonCardModule,
    MyCardModule
  ],
  declarations: [ResponsiblesPage]
})
export class ResponsiblesPageModule {}
