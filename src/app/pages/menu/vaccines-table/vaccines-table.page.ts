import { VaccineClass } from './../../../classes/vaccines/vaccine-class';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vaccines-table',
  templateUrl: './vaccines-table.page.html',
  styleUrls: ['./vaccines-table.page.scss'],
})
export class VaccinesTablePage implements OnInit {

  constructor(
    public vaccineClass: VaccineClass
  ) { }

  ngOnInit() {
  }

}
