import { Component, OnInit } from '@angular/core';
import { DependencyClass } from 'src/app/classes/menu/profile/profile-creator/dependency';

@Component({
  selector: 'app-dependency-add',
  templateUrl: './dependency-add.page.html',
  styleUrls: ['./dependency-add.page.scss'],
})
export class DependencyAddPage implements OnInit{

  constructor(
    public myClass: DependencyClass
  ) { }

  ngOnInit() {
    this.myClass.getData();
  }


}
