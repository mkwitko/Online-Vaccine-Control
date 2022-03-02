import { MyHeaderModule } from './../../../../../components/header/my-header/my-header.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DependencyPageRoutingModule } from './dependency-routing.module';

import { DependencyPage } from './dependency.page';
import { MyFabModule } from 'src/app/components/fab/fab/fab.module';
import { MySkeletonCardModule } from 'src/app/components/skeleton/skeleton-card/skeleton-card.module';
import { MyCardModule } from 'src/app/components/cards/card/card.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DependencyPageRoutingModule,
    MyHeaderModule,
    MyFabModule,
    MySkeletonCardModule,
    MyCardModule
  ],
  declarations: [DependencyPage]
})
export class DependencyPageModule {}
