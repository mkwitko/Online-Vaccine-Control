import { VaccineClass } from './../../../classes/vaccines/vaccine-class';
import { DependencyClass } from './../../../classes/menu/profile/profile-creator/dependency';
import { ResponsibleClass } from './../../../classes/menu/profile/profile-creator/responsible';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DateClass } from 'src/app/classes/date/date-class';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    ResponsibleClass,
    DependencyClass,
    VaccineClass,
    DateClass
  ]
})
export class ClassModuleModule { }
