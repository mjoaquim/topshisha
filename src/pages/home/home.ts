import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import firebase from 'firebase';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  facebook = {
    loggedIn : false,
    name : '',
    email : '',
    profilePicture: ''
  };

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private afauth:AngularFireAuth) {
  }


}