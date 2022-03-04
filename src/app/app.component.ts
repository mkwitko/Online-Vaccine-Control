import { MenuService } from './services/menu/menu.service';
import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/firebase/auth.service';
import { MyNavigationService } from './services/navigation/my-navigation.service';
import { CrudService } from './services/firebase/crud.service';
import { VaccineClass } from './classes/vaccines/vaccine-class';
import { VaccineListService } from './services/vaccine/vaccine-list.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {

  public menuBool = false;

  public itens = [
    {
      name: 'Inicio',
      path: 'home',
      icon: 'home-outline'
    },
    {
      name: 'Tabela de Vacinas',
      path: 'vaccines-table',
      icon: 'clipboard-outline'
    },
    {
      name: 'Histórico de Vacinas',
      path: 'vaccines-history',
      icon: 'receipt-outline'
    },
    {
      name: 'Postos de Saúde',
      path: 'health-stations',
      icon: 'location-outline'
    },
    {
      name: 'Notícias',
      path: 'news',
      icon: 'newspaper-outline'
    },
    {
      name: 'Agendamentos',
      path: 'schedule',
      icon: 'calendar-outline'
    },
    {
      name: 'Relatórios',
      path: 'reports',
      icon: 'bar-chart-outline'
    },
    {
      name: 'Perfil',
      path: 'profile',
      icon: 'people-outline'
    },
    {
      name: 'Parceiros',
      path: 'partners',
      icon: 'diamond-outline'
    },
    {
      name: 'Contato',
      path: 'contact',
      icon: 'call-outline'
    }
  ];

  constructor(
    private menuCtrl: MenuService,
    private auth: AuthService,
    private nav: MyNavigationService,
    private vaccineClass: VaccineClass
  )
  {
    this.auth.getAuth().onAuthStateChanged(user => {
      this.menuBool = !user;
      this.auth.id = user.uid;
    });
  }

  ngOnInit(): void {
    this.vaccineClass.callAll();
  }

  changePage(url: string){
    this.nav.goTo(url);
    this.menuCtrl.close();
  }

  logout(){
    this.auth.logout();
  }
}
