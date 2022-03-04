import { NgChartsModule } from 'ng2-charts';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VaccinesTakenComponent } from './vaccines-taken.component';
import { MySkeletonCardModule } from '../../skeleton/skeleton-card/skeleton-card.module';

@NgModule({
  declarations: [VaccinesTakenComponent],
  imports: [CommonModule, IonicModule, MySkeletonCardModule, NgChartsModule],
  exports: [VaccinesTakenComponent],
  providers: []
})

export class MyVaccinesTakenModule{
}
