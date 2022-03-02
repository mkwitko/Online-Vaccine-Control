import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/auth/user';
import { AuthService } from 'src/app/services/firebase/auth.service';
import { MyNavigationService } from 'src/app/services/navigation/my-navigation.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public user: User = {};

  constructor(
    private nav: MyNavigationService,
    private auth: AuthService
  ) { }

  ngOnInit() {
  }

  login(){
    this.auth.login(this.user);
  }

  changePage(url: string){
    this.nav.goTo(url);
  }

}
