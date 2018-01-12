import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import firebase from 'firebase';
import { TabsPage } from '../tabs/tabs';



/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  facebook = {
    loggedIn: false,
    name: '',
    email: '',
    profilePicture: ''
  };


  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private afauth: AngularFireAuth
  ) {
  }

  loginwithfb() {
    this.afauth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider())
      .then(res => {
        this.facebook.loggedIn = true;
        this.navCtrl.push(TabsPage);
        //this.facebook.email = res.user.email;
        //this.facebook.name = res.user.displayName,
        //this.facebook.profilePicture = res.user.photoURL
      })
  }

  logoutwithfb() {
    this.facebook.loggedIn = false;
    this.afauth.auth.signOut();
  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
