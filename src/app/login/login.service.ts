import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  logedIn!: boolean;
  loginUser!: string;
  loginPass!: string;

login(username: string, password: string){
  this.loginUser = username;
  this.loginPass = password;
  this.logedIn = true;
}


}
