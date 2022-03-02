import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';


//  Angular/Fire + Firebase
import { AngularFireModule } from '@angular/fire/compat';                // Main Angular/Fire Component
import { AngularFirestoreModule } from '@angular/fire/compat/firestore'; // Needed if Firestore is going to be used
import { AngularFireStorageModule } from '@angular/fire/compat/storage'; // Needed if Storage is going to be used
import { environment } from 'src/environments/environment';              // Firebase Configs
import { ClassModuleModule } from './modules/class/class-module/class-module.module';


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule,
    IonicModule.forRoot({ swipeBackEnabled: false }),
    AppRoutingModule,

    //FIREBASE
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireStorageModule,

    //MODULES
    ClassModuleModule
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
