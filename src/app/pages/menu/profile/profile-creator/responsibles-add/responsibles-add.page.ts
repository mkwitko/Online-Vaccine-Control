import { ResponsibleClass } from './../../../../../classes/menu/profile/profile-creator/responsible';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-responsibles-add',
  templateUrl: './responsibles-add.page.html',
  styleUrls: ['./responsibles-add.page.scss'],
})
export class ResponsiblesAddPage implements OnInit {

  constructor(
    public myClass: ResponsibleClass
  ) { }

  ngOnInit() {
    this.myClass.getData();
  }

}
