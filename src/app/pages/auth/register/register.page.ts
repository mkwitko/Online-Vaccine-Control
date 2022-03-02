import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/auth/user';
import { AuthService } from 'src/app/services/firebase/auth.service';
import { MyNavigationService } from 'src/app/services/navigation/my-navigation.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  public user: User = {};

  constructor(
    private nav: MyNavigationService,
    private auth: AuthService
  ) { }

  ngOnInit() {
  }

  register(){
    this.auth.register(this.user);
  }

  changePage(url: string){
    this.nav.goTo(url);
  }

}
