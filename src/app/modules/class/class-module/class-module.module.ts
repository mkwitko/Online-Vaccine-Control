import { DependencyClass } from './../../../classes/menu/profile/profile-creator/dependency';
import { ResponsibleClass } from './../../../classes/menu/profile/profile-creator/responsible';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    ResponsibleClass,
    DependencyClass
  ]
})
export class ClassModuleModule { }
