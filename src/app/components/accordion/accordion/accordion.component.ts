import { VaccineClass } from 'src/app/classes/vaccines/vaccine-class';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
})
export class AccordionComponent implements OnInit {

  @Input() types;

  constructor(
    private vaccineClass: VaccineClass
  ) { }

  ngOnInit() {
    this.vaccineClass.forLoop();
  }



}
