import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { IntroPage } from '../pages/intro/intro';
import { TabsPage } from '../pages/tabs/tabs';
import { UserdataProvider } from '../providers/userdata/userdata';

@Component({
  templateUrl: 'app.html',
  providers: [
    UserdataProvider
  ]
})
export class MyApp {
  rootPage:any;

  constructor(
    platform: Platform, 
    statusBar: StatusBar, 
    splashScreen: SplashScreen,
    UserdataProvider: UserdataProvider
  
  ) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      
      let config = UserdataProvider.getConfigData();
      if(config == null){
        this.rootPage = IntroPage;
        UserdataProvider.setConfigData(false);
      } else {
        this.rootPage = TabsPage;
      }

      console.log(config); 

      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
