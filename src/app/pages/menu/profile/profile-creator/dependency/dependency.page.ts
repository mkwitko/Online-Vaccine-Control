import { DependencyClass } from 'src/app/classes/menu/profile/profile-creator/dependency';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dependency',
  templateUrl: './dependency.page.html',
  styleUrls: ['./dependency.page.scss'],
})
export class DependencyPage implements OnInit {

  constructor(
    public myClass: DependencyClass
  ) { }

  ngOnInit() {
  }


}
