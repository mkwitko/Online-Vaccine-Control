import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionComponent } from './accordion.component';

@NgModule({
  declarations: [AccordionComponent],
  imports: [CommonModule, IonicModule],
  exports: [AccordionComponent],
  providers: []
})

export class MyAccordionModule{
}
