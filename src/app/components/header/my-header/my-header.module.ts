import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyHeaderComponent } from './my-header.component';

@NgModule({
  declarations: [MyHeaderComponent],
  imports: [CommonModule, IonicModule],
  exports: [MyHeaderComponent],
  providers: []
})

export class MyHeaderModule{
}
