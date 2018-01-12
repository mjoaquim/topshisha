import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { IntroPageModule } from '../pages/intro/intro.module';
import { UserdataProvider } from '../providers/userdata/userdata';
import { Facebook } from '@ionic-native/facebook';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { LoginPageModule } from '../pages/login/login.module';

const firebase = {
  apiKey: "AIzaSyDLBr4oroNuDuEftrRHlAO1DZadA9R6Z2w",
  authDomain: "topshisha-40493.firebaseapp.com",
  databaseURL: "https://topshisha-40493.firebaseio.com",
  projectId: "topshisha-40493",
  storageBucket: "topshisha-40493.appspot.com",
  messagingSenderId: "586192207505"
};

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IntroPageModule,
    AngularFireModule.initializeApp(firebase),
    AngularFireAuthModule,
    LoginPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserdataProvider,
    Facebook
  ]
})
export class AppModule {}
