import { User } from './../../interfaces/auth/user';
import { MenuService } from './../menu/menu.service';
import { Injectable } from '@angular/core';

import { Capacitor } from '@capacitor/core';
import { initializeApp } from 'firebase/app';
import { environment } from 'src/environments/environment';

import { indexedDBLocalPersistence,
  initializeAuth,
  Auth,
  getAuth,
  signInAnonymously,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail  } from 'firebase/auth';
import { AllowService } from '../allow-to-pass/allow.service';
import { ScreenService } from '../screen/screen.service';
import { MyNavigationService } from '../navigation/my-navigation.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly auth: Auth;

  constructor(
    private allow: AllowService,
    private menuCtrl: MenuService,
    private screenService: ScreenService,
    private navigation: MyNavigationService
  )
  {
    const firebaseApp = initializeApp(environment.firebase);
    if (Capacitor.isNativePlatform()) {
      initializeAuth(firebaseApp, {
        persistence: indexedDBLocalPersistence
      });
    }
    this.auth = getAuth(firebaseApp);
  }

  async login(user: User){
    if(this.allow.guardian([
      user.userEmail, user.userPassword]))
    {
      signInWithEmailAndPassword(this.auth, user.userEmail.trim(), user.userPassword.trim())
      .then(() =>{
        this.menuCtrl.menuCtrl(true);
      })
      .catch((error) => {
        this.screenService.presentToast(error);
      });;
    } else {
      this.screenService.presentToast('Preencha os campos');
    }
  }

  async loginAnon(){
    signInAnonymously(this.auth)
    .then(() =>{
      this.menuCtrl.menuCtrl(true);
    })
    .catch((error) => {
      this.screenService.presentToast(error);
    });;
  }

  async logout(){
    this.menuCtrl.menuCtrl(false);
    this.auth.signOut()
    .catch((error) => {
      this.screenService.presentToast(error);
    });
  }

  async register(user: User){
    if(this.allow.guardian(
      [user.userEmail, user.userPassword]
    ))
    {
      createUserWithEmailAndPassword(this.auth, user.userEmail.trim(), user.userPassword.trim())
      .catch((error) => {
        this.screenService.presentToast(error);
      });
    } else {
      this.screenService.presentToast('Preencha os campos.');
    }
  }

  async resetPassword(email: string){
    if(this.allow.guardian(
      [email]
    ))
    {
      sendPasswordResetEmail(this.auth, email.trim())
      .then((result) => {
        this.screenService.presentToast(
          'E-mail enviado'
        );
        this.navigation.goBack();
      })
      .catch((error) => {
        console.log(error.code);
      this.screenService.presentToast(
        error
      );
    });
    } else {
      this.screenService.presentToast(
        'Preencha os campos'
      );
    }
  }

  getAuth(){
    return this.auth;
  }

  async getUser(){
    return await this.auth.currentUser;
  }
}
