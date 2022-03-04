import { NgChartsModule } from 'ng2-charts';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MySkeletonCardModule } from '../../skeleton/skeleton-card/skeleton-card.module';
import { VaccinesAllComponent } from './vaccines-all.component';

@NgModule({
  declarations: [VaccinesAllComponent],
  imports: [CommonModule, IonicModule, MySkeletonCardModule, NgChartsModule],
  exports: [VaccinesAllComponent],
  providers: []
})

export class MyVaccinesAllModule{
}
