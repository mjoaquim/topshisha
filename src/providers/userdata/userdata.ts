import { Injectable } from '@angular/core';

let config_key_name = "config";

/*
  Generated class for the UserdataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserdataProvider {

    private config = {
      showSlide: false,
      name: "",
      username: ""

    }

  constructor() {
    
  }

  // Funcoes para LocalStorage
  // Recupera dados do localstorage
  getConfigData(): any{
    return localStorage.getItem(config_key_name);
  }
  // Grava os dados do localstorage
  // ? Opcional
  setConfigData(showSlide?: boolean, name?: string, username?: string){
    let config = {
      showSlide: false,
      name: "",
      username: ""
      };

      if(showSlide){
        config.showSlide = showSlide;
      }
      if(name){
        config.name = name;  
      }
      if(username){
        config.username = username;  
      }

      localStorage.setItem("config", JSON.stringify(config));
  }
}

