import { Component, Input } from '@angular/core';
import { Card } from 'src/app/interfaces/card/card';
import { MyNavigationService } from 'src/app/services/navigation/my-navigation.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() cardPath: Card;

  constructor(
    private navigation: MyNavigationService
  ){};

  changePage(url){
    if(url){
      this.navigation.goTo(url);
    }
  }

}
