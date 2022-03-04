import { Component, OnInit } from '@angular/core';
import { ResponsibleClass } from 'src/app/classes/menu/profile/profile-creator/responsible';

@Component({
  selector: 'app-responsibles',
  templateUrl: './responsibles.page.html',
  styleUrls: ['./responsibles.page.scss'],
})
export class ResponsiblesPage implements OnInit {

  constructor(
    public myClass: ResponsibleClass
  ) { }

  ngOnInit() {
  }

}
