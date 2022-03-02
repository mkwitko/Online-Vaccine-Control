import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/interfaces/card/card';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  public responsiblePath: Card = {
    title: 'Responsáveis',
    subtitle: 'Preencha, edite ou adicione informações sobre os responsáveis',
    content: 'Aqui você poderá adicionar e preencher as informações sobre todos os responsáveis das crianças.',
    path: 'profile/responsibles'
  };

  public childPath: Card = {
    title: 'Dependentes',
    subtitle: 'Preencha, edite ou adicione informações sobre seus filhos',
    content: 'Aqui você poderá adicionar e preencher as informações sobre todos os seus filhos e/ou dependentes.',
    path: 'profile/dependency'
  };

  constructor() { }

  ngOnInit() {
  }

}
