import { Component, OnInit } from '@angular/core';
import { VaccineClass } from 'src/app/classes/vaccines/vaccine-class';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(
    public vaccineClass: VaccineClass
  )
  {

  }

  ngOnInit() {
  }
}
