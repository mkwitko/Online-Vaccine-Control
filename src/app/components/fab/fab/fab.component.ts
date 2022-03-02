import { Component, Input } from '@angular/core';
import { MyNavigationService } from 'src/app/services/navigation/my-navigation.service';

@Component({
  selector: 'app-fab',
  templateUrl: './fab.component.html',
  styleUrls: ['./fab.component.scss'],
})
export class FabComponent{

  @Input() url: string;

  constructor(
    private navigation: MyNavigationService
  ){}

  changePage(){
    this.navigation.goTo(this.url);
  }
}
